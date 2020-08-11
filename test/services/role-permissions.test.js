const assert = require('assert');
const app = require('../../src/app');

describe('\'role-permissions\' service', () => {
  it('registered the service', () => {
    const service = app.service('role-permissions');

    assert.ok(service, 'Registered the service');
  });
});
