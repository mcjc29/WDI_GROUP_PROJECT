/* globals api, expect, describe, it */
require('../spec_helper');

const errorHandler = require('../../lib/errorHandler');

describe('ErrorHandler', function() {
  it('should be defined', (done) => {
    expect(errorHandler).to.be.a('function');
    done();
  });
  // it('should return a 500 response', done => {
  //   api
  //     .get()
  //     .set('Accept', 'application/json')
  //     .expect(500, done);
  // });
});
