/* globals api, expect, describe, beforeEach, it, xit */
require('../spec_helper');
const User = require('../../models/user');

describe('Authentications', function() {

  beforeEach(done => {
    User.collection.remove();
    done();
  });

  describe('POST /api/register', function() {
    it('should register a user with the correct credentials', function(done) {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          user: {
            firstName: 'person',
            lastName: 'person',
            image: 'person',
            role: 'student',
            email: 'person@person.com',
            password: 'password',
            passwordConfirmation: 'password'
          }
        })
        .end((err, res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.be.a('string');
          expect(res.body.message).to.be.eq('Thanks for registering.');
          expect(res.body.token).to.be.a('string');
          done();
        });
    });
    it('should not register a user with no email', function(done) {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          user: {
            firstName: 'person',
            lastName: 'person',
            image: 'person',
            role: 'student',
            email: 'person@person.com',
            password: 'password',
            passwordConfirmation: 'password'
          }
        })
        .end((err, res) => {
          expect(res.status).to.eq(400);
          expect(res.body).to.be.a('object');
          expect(res.body.errors).to.be.eq('ValidationError: email: Path `email` is required.');
          expect(res.body.message).to.be.eq('Bad Request');
          done();
        });
    });
    xit('should not register a user with no password', function() {
    });
    xit('should not register a user with no password confirmation', function() {
    });
  });

});
