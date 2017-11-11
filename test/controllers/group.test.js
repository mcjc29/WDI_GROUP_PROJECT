/* globals api, expect, describe, beforeEach, afterEach, it */

require('../spec_helper');

const Group = require('../../models/group');

describe('Groups', function() {

  beforeEach(done => {
    Group.collection.remove();
    done();
  });

  afterEach(done => {
    Group.collection.remove();
    done();
  });

  describe('GET /api/groups', () => {
    beforeEach(done => {
      Group.create({
        name: 'WDI30',
        city: 'London',
        taughtBy: 'Alex && Rane'
      })
        .then(() => done())
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get('/api/groups')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should return a JSON object', done => {
      api
        .get('/api/groups')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return an array of groups', function(done) {
      api
        .get('/api/groups')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of groups objects', function(done) {
      api
        .get('/api/groups')
        .set('Accept', 'application/json')
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
        .get('/api/groups')
        .set('Accept', 'application/json')
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

  describe('returns multiple groups', () => {

    beforeEach(done => {
      Group.create([
        {
          name: 'WDI30',
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

    it('should create 2 groups', done => {
      api
        .get('/api/groups')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body.length).to.equal(2);
          done();
        });
    });
  });

  describe('POST /api/groups', () => {

    it('should return a 201 response', done => {
      api
        .post('/api/groups')
        .set('Accept', 'application/json')
        .send({
          name: 'WDI30',
          city: 'London',
          taughtBy: 'Alex && Rane'
        })
        .expect(201, done);
    });

    it('should create a new group', done => {
      api
        .post('/api/groups')
        .set('Accept', 'application/json')
        .send({
          name: 'WDI30',
          city: 'London',
          taughtBy: 'Alex && Rane'
        })
        .end((err, res) => {
          const group = res.body;

          expect(group)
            .to.have.property('_id')
            .and.to.be.a('string');

          expect(group)
            .to.have.property('name')
            .and.to.be.a('string');

          expect(group)
            .to.have.property('city')
            .and.to.be.a('string');

          expect(group)
            .to.have.property('taughtBy')
            .and.to.be.a('string');

          expect(group)
            .to.have.property('createdAt')
            .and.to.be.a('string');

          expect(group)
            .to.have.property('updatedAt')
            .and.to.be.a('string');

          done();
        });

    });

  });

  describe('GET /api/groups/:id', () => {

    let group;

    beforeEach(done => {
      Group
        .create({
          name: 'WDI30',
          city: 'London',
          taughtBy: 'Alex && Rane'
        })
        .then(groupData => {
          group = groupData;
          done();
        })
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get(`/api/groups/${group.id}`)
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should return a JSON object', done => {
      api
        .get(`/api/groups/${group.id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });
    it('should return object with properties:_id, name, city, taughtBy, createdAt, updatedAt', done => {
      api.get(`/api/groups/${group.id}`)
        .set('Accept', 'application/json')
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

  describe('PUT /api/groups/:id', () => {

    let group;

    beforeEach(done => {
      Group
        .create({
          name: 'WDI30',
          city: 'London',
          taughtBy: 'Alex && Rane'
        })
        .then(groupData => {
          group = groupData;
          done();
        })
        .catch(done);
    });

    it('should return 200 status', function(done) {
      api
        .put(`/api/groups/${group.id}`)
        .set('Accept', 'application/json')
        .send({
          name: 'WDI31',
          city: 'London',
          taughtBy: 'Alex && Rane'
        })
        .expect(200, done);
    });
    it('should return a JSON object', done => {
      api
        .get(`/api/groups/${group.id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });
    it('should return object with properties: _id, name, city, taughtBy', done => {
      api.get(`/api/groups/${group.id}`)
        .set('Accept', 'application/json')
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
        .put(`/api/groups/${group.id}`)
        .set('Accept', 'application/json')
        .send({
          name: 'WDI31',
          city: 'London',
          taughtBy: 'Alex && Rane'
        })
        .end((err, res) => {
          expect(res.body.name)
            .to.be.eq('WDI31');
          done();
        });
    });

  });

  describe('DELETE /api/groups/:id', () => {

    let group;

    beforeEach(done => {
      Group
        .create({
          name: 'WDI30',
          city: 'London',
          taughtBy: 'Alex && Rane'
        })
        .then(groupData => {
          group = groupData;
          done();
        })
        .catch(done);
    });

    it('should remove a group by id', function(done) {
      api
        .delete(`/api/groups/${group.id}`)
        .expect(204, done);
    });
  });
});
