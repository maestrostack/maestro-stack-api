const assert = require('assert');
const app = require('../../src/app');

describe('\'stack-resource-logs\' service', () => {
  it('registered the service', () => {
    const service = app.service('stack-resource-logs');

    assert.ok(service, 'Registered the service');
  });
});
