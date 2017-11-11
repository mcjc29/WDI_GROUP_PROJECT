/* globals expect, describe, it */
require('../spec_helper');
const Group = require('../../models/group');

describe('Group', function() {
  it('should be invalid if name is empty', function(done) {
    const group = new Group();

    group.validate(function(err) {
      expect(err.errors.name).to.exist;
      done();
    });
  });
  
  it('should be invalid if taughtBy is empty', function(done) {
    const group = new Group();

    group.validate(function(err) {
      expect(err.errors.taughtBy).to.exist;
      done();
    });
  });

});
