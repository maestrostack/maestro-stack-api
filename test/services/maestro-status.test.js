const assert = require('assert');
const app = require('../../src/app');

describe('\'maestro-status\' service', () => {
  it('registered the service', () => {
    const service = app.service('maestro-status');

    assert.ok(service, 'Registered the service');
  });
});
