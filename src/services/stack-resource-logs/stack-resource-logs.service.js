// Initializes the `stack-resource-logs` service on path `/stack-resource-logs`
const { StackResourceLogs } = require('./stack-resource-logs.class');
const createModel = require('../../models/stack-resource-logs.model');
const hooks = require('./stack-resource-logs.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/stack-resource-logs', new StackResourceLogs(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('stack-resource-logs');

  service.hooks(hooks);
};
