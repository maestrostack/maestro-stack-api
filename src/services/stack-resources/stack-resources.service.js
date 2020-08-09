// Initializes the `stack-resources` service on path `/stack-resources`
const { StackResources } = require('./stack-resources.class');
const createModel = require('../../models/stack-resources.model');
const hooks = require('./stack-resources.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/stack-resources', new StackResources(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('stack-resources');

  service.hooks(hooks);
};
