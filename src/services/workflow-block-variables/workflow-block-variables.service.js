// Initializes the `workflow-block-variables` service on path `/workflow-block-variables`
const { WorkflowBlockVariables } = require('./workflow-block-variables.class');
const createModel = require('../../models/workflow-block-variables.model');
const hooks = require('./workflow-block-variables.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/workflow-block-variables', new WorkflowBlockVariables(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('workflow-block-variables');

  service.hooks(hooks);
};
