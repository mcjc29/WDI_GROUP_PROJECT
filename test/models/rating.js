/* globals expect, describe, it */
require('../spec_helper');
const Rating = require('../../models/rating');

describe('Rating', function() {
  it('should be invalid if createdBy is empty', function(done) {
    const rating = new Rating();

    rating.validate(function(err) {
      expect(err.errors.createdBy).to.exist;
      done();
    });
  });

  it('should be invalid if pace is empty', function(done) {
    const rating = new Rating();

    rating.validate(function(err) {
      expect(err.errors.pace).to.exist;
      done();
    });
  });
  it('should be invalid if concepts is empty', function(done) {
    const rating = new Rating();

    rating.validate(function(err) {
      expect(err.errors.concepts).to.exist;
      done();
    });
  });
  it('should be invalid if syntax is empty', function(done) {
    const rating = new Rating();

    rating.validate(function(err) {
      expect(err.errors.syntax).to.exist;
      done();
    });
  });
  it('should be invalid if confidence is empty', function(done) {
    const rating = new Rating();

    rating.validate(function(err) {
      expect(err.errors.confidence).to.exist;
      done();
    });
  });
});
