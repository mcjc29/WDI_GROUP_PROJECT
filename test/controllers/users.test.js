/* globals api, expect, describe, xdescribe, beforeEach, afterEach, it, xit */

require('../spec_helper');

const User = require('../../models/user');

describe('Users', function() {

  beforeEach(done => {
    User.collection.remove();
    done();
  });

  afterEach(done => {
    User.collection.remove();
    done();
  });

  describe('GET /api/users', () => {
    let users;
    beforeEach(done => {
      User
        .create({
          firstName: 'person',
          lastName: 'person',
          image: 'person',
          role: 'student',
          email: 'person@person.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .then(usersData => {
          users = usersData;
          done();
        })
        .catch(done);
    });
    it('should return a 200 response', done => {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
    it('should return an array of users', function(done) {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });
    it('should return an array of users objects', function(done) {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .to.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              'id',
              'firstName',
              'lastName',
              'image',
              'role',
              'email'
            ]);
          done();
        });
    });

    it('should have properties: _id, name, image', function(done) {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .end((err, res) => {
          const firstUser = res.body[0];
          expect(firstUser)
            .to.have.property('id')
            .and.to.be.a('string');

          expect(firstUser)
            .to.have.property('firstName')
            .and.to.be.a('string');

          expect(firstUser)
            .to.have.property('lastName')
            .and.to.be.a('string');

          expect(firstUser)
            .to.have.property('image')
            .and.to.be.a('string');

          expect(firstUser)
            .to.have.property('role')
            .and.to.be.a('string');

          expect(firstUser)
            .to.have.property('email')
            .and.to.be.a('string');

          done();
        });
    });

  });
});
