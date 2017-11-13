/* globals expect, describe, it */
require('../spec_helper');
const Cohort = require('../../models/cohort');

describe('Cohort', function() {
  it('should be invalid if name is empty', function(done) {
    const cohort = new Cohort();

    cohort.validate(function(err) {
      expect(err.errors.name).to.exist;
      done();
    });
  });

  it('should be invalid if taughtBy is empty', function(done) {
    const cohort = new Cohort();

    cohort.validate(function(err) {
      expect(err.errors.taughtBy).to.exist;
      done();
    });
  });

});
