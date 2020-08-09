// Initializes the `maestro-status` service on path `/maestro-status`
const { MaestroStatus } = require('./maestro-status.class');
const createModel = require('../../models/maestro-status.model');
const hooks = require('./maestro-status.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/maestro-status', new MaestroStatus(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('maestro-status');

  service.hooks(hooks);
};
