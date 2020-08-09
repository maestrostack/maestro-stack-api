const Queue = require('bee-queue');
const taskQueue = require('feathers-bee-queue');

module.exports = function (app) {
  // const options = {
  //   Model: createModel(app),
  //   paginate: app.get('paginate')
  // };

  // Initialize our service with any options it requires
  app.use('/task-queue', taskQueue({
    queue: new Queue('task-queue')
  }));

  // Get our initialized service so that we can register hooks
  //const service = app.service('users');

  //service.hooks(hooks);
};