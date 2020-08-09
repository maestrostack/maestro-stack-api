// Initializes the `group-roles` service on path `/group-roles`
const { GroupRoles } = require('./group-roles.class');
const createModel = require('../../models/group-roles.model');
const hooks = require('./group-roles.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/group-roles', new GroupRoles(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('group-roles');

  service.hooks(hooks);
};
