// Initializes the `syslog` service on path `/syslog`
const { Syslog } = require('./syslog.class');
const createModel = require('../../models/syslog.model');
const hooks = require('./syslog.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/syslog', new Syslog(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('syslog');

  service.hooks(hooks);
};
