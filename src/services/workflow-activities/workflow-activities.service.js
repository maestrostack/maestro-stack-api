// Initializes the `workflow-activities` service on path `/workflow-activities`
const { WorkflowActivities } = require('./workflow-activities.class');
const createModel = require('../../models/workflow-activities.model');
const hooks = require('./workflow-activities.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/workflow-activities', new WorkflowActivities(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('workflow-activities');

  service.hooks(hooks);
};
