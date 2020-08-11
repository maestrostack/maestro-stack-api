const processNewRecord = require('./hooks/process-new-record');
const processUpdatedRecord = require('./hooks/process-updated-record');
const processRemovedRecord = require('./hooks/process-removed-record');
// Application hooks that run for every service

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processNewRecord()],
    update: [],
    patch: [processUpdatedRecord()],
    remove: [
      processRemovedRecord()
    ]
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
