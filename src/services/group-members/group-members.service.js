// Initializes the `group-members` service on path `/group-members`
const { GroupMembers } = require('./group-members.class');
const createModel = require('../../models/group-members.model');
const hooks = require('./group-members.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/group-members', new GroupMembers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('group-members');

  service.hooks(hooks);
};
