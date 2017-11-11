/* globals expect, describe, it */
require('../spec_helper');
const Lesson = require('../../models/lesson');

describe('Lesson', function() {
  it('should be invalid if title is empty', function(done) {
    const lesson = new Lesson();

    lesson.validate(function(err) {
      expect(err.errors.title).to.exist;
      done();
    });
  });
  it('should be invalid if competencies is empty', function(done) {
    const lesson = new Lesson();

    lesson.validate(function(err) {
      expect(err.errors.competencies).to.exist;
      done();
    });
  });
  it('should be invalid if taughtBy is empty', function(done) {
    const lesson = new Lesson();

    lesson.validate(function(err) {
      expect(err.errors.taughtBy).to.exist;
      done();
    });
  });

});
