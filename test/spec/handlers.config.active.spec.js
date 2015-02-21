var app = require('../../app');
var request = require('supertest');
var should = require('should');

describe('Handlers configuration - Activate part', function () {
  it('option.active === true > handler should respond', function (done) {
    request(app)
            .get('/testActive1')
            .expect(200)
            .end(done);
  });
});