/* globals expect, describe, it */
require('../spec_helper');
const Comment = require('../../models/comment');

describe('Comment', function() {
  it('should be invalid if content is empty', function(done) {
    const comment = new Comment();

    comment.validate(function(err) {
      expect(err.errors.content).to.exist;
      done();
    });
  });
  
});
