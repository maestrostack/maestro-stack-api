const assert = require('assert');
const app = require('../../src/app');

describe('\'stack-resources\' service', () => {
  it('registered the service', () => {
    const service = app.service('stack-resources');

    assert.ok(service, 'Registered the service');
  });
});
