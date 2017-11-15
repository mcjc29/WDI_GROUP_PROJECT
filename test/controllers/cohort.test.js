/* globals api, expect, describe, beforeEach, afterEach, it */

require('../spec_helper');

const Cohort = require('../../models/cohort');
const User = require('../../models/user');

describe('Cohorts', function() {

  let token;

  beforeEach(done => {
    Cohort.collection.remove();
    User.collection.remove();
    done();
  });

  afterEach(done => {
    Cohort.collection.remove();
    User.collection.remove();
    done();
  });

  describe('GET /api/cohorts', () => {

    beforeEach(done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
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
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });

    beforeEach(done => {
      Cohort.create({
        name: 'WDI-30',
        city: 'London',
        taughtBy: 'Alex && Rane'
      })
        .then(() => done())
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get('/api/cohorts')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(200, done);
    });

    it('should return a JSON object', done => {
      api
        .get('/api/cohorts')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });
    it('response should return a token', done => {
      api
        .get('/api/cohorts')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body.token).to.be.a('string');
          done();
        });
    });

    it('should return an array of cohorts', function(done) {
      api
        .get('/api/cohorts')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of cohorts objects', function(done) {
      api
        .get('/api/cohorts')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body)
            .to.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              '__v',
              '_id',
              'name',
              'city',
              'taughtBy',
              'createdAt',
              'updatedAt'
            ]);
          done();
        });
    });

    it('should have properties: _id, name, city, taughtBy', function(done) {
      api
        .get('/api/cohorts')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          const firstGroup = res.body[0];
          expect(firstGroup)
            .to.have.property('_id')
            .and.to.be.a('string');
          expect(firstGroup)
            .to.have.property('name')
            .and.to.be.a('string');
          expect(firstGroup)
            .to.have.property('city')
            .and.to.be.a('string');
          expect(firstGroup)
            .to.have.property('taughtBy')
            .and.to.be.a('string');
          done();
        });
    });
  });

  describe('returns multiple cohorts', () => {

    beforeEach(done => {
      Cohort.create([
        {
          name: 'WDI-30',
          city: 'London',
          taughtBy: 'Alex && Rane'
        },
        {
          name: 'WDI29',
          city: 'London',
          taughtBy: 'Mike'
        }
      ])
        .then(() => done())
        .catch(done);
    });

    it('should create 2 cohorts', done => {
      api
        .get('/api/cohorts')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body.length).to.equal(2);
          done();
        });
    });
  });

  describe('POST /api/cohorts', () => {

    it('should return a 201 response', done => {
      api
        .post('/api/cohorts')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'WDI-30',
          city: 'London',
          taughtBy: 'Alex && Rane'
        })
        .expect(201, done);
    });

    it('should create a new cohort', done => {
      api
        .post('/api/cohorts')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'WDI-30',
          city: 'London',
          taughtBy: 'Alex && Rane'
        })
        .end((err, res) => {
          const cohort = res.body;

          expect(cohort)
            .to.have.property('_id')
            .and.to.be.a('string');

          expect(cohort)
            .to.have.property('name')
            .and.to.be.a('string');

          expect(cohort)
            .to.have.property('city')
            .and.to.be.a('string');

          expect(cohort)
            .to.have.property('taughtBy')
            .and.to.be.a('string');

          expect(cohort)
            .to.have.property('createdAt')
            .and.to.be.a('string');

          expect(cohort)
            .to.have.property('updatedAt')
            .and.to.be.a('string');

          done();
        });

    });

  });

  describe('GET /api/cohorts/:id', () => {

    let cohort;

    beforeEach(done => {
      Cohort
        .create({
          name: 'WDI-30',
          city: 'London',
          taughtBy: 'Alex && Rane'
        })
        .then(cohortData => {
          cohort = cohortData;
          done();
        })
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get(`/api/cohorts/${cohort.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(200, done);
    });

    it('should return a JSON object', done => {
      api
        .get(`/api/cohorts/${cohort.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });
    it('should return object with properties:_id, name, city, taughtBy, createdAt, updatedAt', done => {
      api.get(`/api/cohorts/${cohort.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body)
            .and.have.all.keys([
              '__v',
              '_id',
              'name',
              'city',
              'taughtBy',
              'createdAt',
              'updatedAt'
            ]);
          done();
        });
    });
  });

  describe('PUT /api/cohorts/:id', () => {

    let cohort;

    beforeEach(done => {
      Cohort
        .create({
          name: 'WDI-30',
          city: 'London',
          taughtBy: 'Alex && Rane'
        })
        .then(cohortData => {
          cohort = cohortData;
          done();
        })
        .catch(done);
    });

    it('should return 200 status', function(done) {
      api
        .put(`/api/cohorts/${cohort.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'WDI-31',
          city: 'London',
          taughtBy: 'Alex && Rane'
        })
        .expect(200, done);
    });
    it('should return a JSON object', done => {
      api
        .get(`/api/cohorts/${cohort.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });
    it('should return object with properties: _id, name, city, taughtBy', done => {
      api.get(`/api/cohorts/${cohort.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body)
            .and.have.all.keys([
              '__v',
              '_id',
              'name',
              'city',
              'taughtBy',
              'createdAt',
              'updatedAt'
            ]);
          done();
        });
    });
    it('should return updated data', function(done) {
      api
        .put(`/api/cohorts/${cohort.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'WDI-31',
          city: 'London',
          taughtBy: 'Alex && Rane'
        })
        .end((err, res) => {
          expect(res.body.name)
            .to.be.eq('WDI-31');
          done();
        });
    });

  });

  describe('DELETE /api/cohorts/:id', () => {

    let cohort;

    beforeEach(done => {
      Cohort
        .create({
          name: 'WDI-30',
          city: 'London',
          taughtBy: 'Alex && Rane'
        })
        .then(cohortData => {
          cohort = cohortData;
          done();
        })
        .catch(done);
    });

    it('should remove a cohort by id', function(done) {
      api
        .delete(`/api/cohorts/${cohort.id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(204, done);
    });
  });
});
