const assert = require('assert');
const app = require('../../src/app');

describe('\'group-members\' service', () => {
  it('registered the service', () => {
    const service = app.service('group-members');

    assert.ok(service, 'Registered the service');
  });
});
