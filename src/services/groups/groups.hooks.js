const { authenticate } = require('@feathersjs/authentication').hooks;
const checkPermissions = require('feathers-permissions');
module.exports = {
  before: {
    all: [
      authenticate('jwt'),
      async context => {
        const { app, params } = context;
        const user = params.user;

        // console.log(params);

        const user_groups = [];
        const permissions = [];

        let userRoles = await app.service('user-roles').find({
          query: {
            user: user._id
          }
        });

        userRoles = userRoles.data;

        console.log(userRoles);

        for (var i in userRoles) {
          let role = await app.service('roles').get(userRoles[i].role);
          permissions.push(role.permission);
        }


        let userGroups = await app.service('group-members').find({
          user: user._id
        });

        userGroups = userGroups.data;

        for (var ug in userGroups ) {
          user_groups.push(userGroups[ug].group);

          console.log('\n\n ---- USER GROUPS ----');
          console.log(userGroups);

          console.log(userGroups[ug].group);
          
          let groupRoles = await app.service('group-roles').find({
            query: {
              group: userGroups[ug].group
            }
          });
  
          groupRoles = groupRoles.data;

          console.log('----- GROUP ROLES -----');

          console.log(groupRoles)
  

          for (var gr in groupRoles) {
            let role = await app.service('roles').get(groupRoles[gr].role);
            permissions.push(role.permission);
          }
          
        }






        context.params.user.user_groups = user_groups;
        context.params.user.permissions = permissions;

        console.log(context.params.user);
        
        return context;
      },
      checkPermissions({
        roles: ['admin']
      })
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
