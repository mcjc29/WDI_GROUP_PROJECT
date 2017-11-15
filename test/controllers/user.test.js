/* globals api, expect, describe, beforeEach, afterEach, it */
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

    beforeEach(done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .send({
          firstName: 'person',
          lastName: 'person',
          image: 'person',
          role: 'student',
          cohort: 'WDI-30',
          email: 'person@person.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end(() => {
          done();
        });
    });

    it('should return a 200 response', done => {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .expect(200, done);
    });

    it('should return a JSON object', done => {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return an array of users', function(done) {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of users objects', function(done) {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
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
              'cohort',
              'email',
              'createdAt',
              'updatedAt'
            ]);
          done();
        });
    });

    it('should have properties: _id, firstName, lastName, image, role, email', function(done) {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
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
            .to.have.property('cohort')
            .and.to.be.a('string');
          expect(firstUser)
            .to.have.property('email')
            .and.to.be.a('string');
          done();
        });
    });
  });

  describe('returns multiple students', () => {

    beforeEach(done => {
      User.create([
        {
          firstName: 'person1',
          lastName: 'person1',
          image: 'person',
          role: 'student',
          cohort: 'WDI-30',
          email: 'person1@person.com',
          password: 'password',
          passwordConfirmation: 'password'
        },
        {
          firstName: 'person2',
          lastName: 'person2',
          image: 'person',
          role: 'student',
          cohort: 'WDI-30',
          email: 'person2@person.com',
          password: 'password',
          passwordConfirmation: 'password'
        }
      ])
        .then(() => done())
        .catch(done);
    });

    it('should create 2 users', done => {
      api
        .get('/api/users')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .end((err, res) => {
          expect(res.body.length).to.equal(2);
          done();
        });
    });
  });

  describe('GET /api/users/:id', () => {

    let user;

    beforeEach(done => {
      User
        .create({
          firstName: 'person',
          lastName: 'person',
          image: 'person',
          role: 'student',
          cohort: 'WDI-30',
          email: 'person@person.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .then(userData => {
          user = userData;
          done();
        })
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get(`/api/users/${user.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .expect(200, done);
    });

    it('should return a JSON object', done => {
      api
        .get(`/api/users/${user.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });
    it('should return object with properties: _id, firstName, lastName, image, role, email, createdAt, updatedAt', done => {
      api.get(`/api/users/${user.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .end((err, res) => {
          expect(res.body)
            .and.have.all.keys([
              '__v',
              '_id',
              'firstName',
              'lastName',
              'image',
              'role',
              'cohort',
              'email',
              'passwordHash',
              'ratings',
              'createdAt',
              'updatedAt'
            ]);
          done();
        });
    });
  });

  describe('PUT /api/users/:id', () => {

    let user;

    beforeEach(done => {
      User
        .create({
          firstName: 'person',
          lastName: 'person',
          image: 'person',
          role: 'student',
          cohort: 'WDI-30',
          email: 'person@person.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .then(userData => {
          user = userData;
          done();
        })
        .catch(done);
    });

    it('should return 200 status', function(done) {
      api
        .put(`/api/users/${user.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .send({
          firstName: 'personperson',
          lastName: 'personperson',
          image: 'person',
          role: 'student',
          cohort: 'WDI-30',
          email: 'person@person.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .expect(200, done);
    });
    it('should return a JSON object', done => {
      api
        .get(`/api/users/${user.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });
    it('should return object with properties: _id, firstName, lastName, image, role, email, createdAt, updatedAt', done => {
      api.get(`/api/users/${user.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .end((err, res) => {
          expect(res.body)
            .and.have.all.keys([
              '__v',
              '_id',
              'firstName',
              'lastName',
              'image',
              'role',
              'cohort',
              'email',
              'passwordHash',
              'ratings',
              'createdAt',
              'updatedAt'
            ]);
          done();
        });
    });
    it('should return updated data', function(done) {
      api
        .put(`/api/users/${user.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .send({
          firstName: 'personperson',
          lastName: 'personperson',
          image: 'person',
          role: 'student',
          cohort: 'WDI-30',
          email: 'person@person.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          expect(res.body.firstName)
            .to.be.eq('personperson');
          done();
        });
    });

  });

  describe('DELETE /api/users/:id', () => {

    let user;

    beforeEach(done => {
      User
        .create({
          firstName: 'person',
          lastName: 'person',
          image: 'person',
          role: 'student',
          cohort: 'WDI-30',
          email: 'person@person.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .then(userData => {
          user = userData;
          done();
        })
        .catch(done);
    });

    it('should remove a user by id', function(done) {
      api
        .delete(`/api/users/${user.id}`)
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .expect(204, done);

    });
  });
});
