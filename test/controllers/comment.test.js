/* globals api, expect, describe, beforeEach, it */

require('../spec_helper');

const Comment = require('../../models/comment');
const User = require('../../models/user');

describe('Comments', function() {

  beforeEach(done => {
    Comment.collection.remove();
    done();
  });

  beforeEach(done => {
    User.collection.remove();
    done();
  });

  describe('GET /api/comments', () => {

    beforeEach(done => {
      User
        .create({
          firstName: 'person2',
          lastName: 'person2',
          role: 'student',
          cohort: 'WDI-30',
          email: 'person2@person2.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .then((user) => {
          return Comment
            .create({
              createdBy: user,
              content: 'Blah'
            })
            .then(() => done())
            .catch(done);
        });
    });

    it('should return a 200 response', done => {
      api
        .get('/api/comments')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should return a JSON object', done => {
      api
        .get('/api/comments')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return an array of comments', function(done) {
      api
        .get('/api/comments')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of comments objects', function(done) {
      api
        .get('/api/comments')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .to.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              '__v',
              '_id',
              'createdBy',
              'content',
              'replies',
              'createdAt',
              'updatedAt'
            ]);
          done();
        });
    });

    it('should have properties: _id, createdBy, content', function(done) {
      api
        .get('/api/comments')
        .set('Accept', 'application/json')
        .end((err, res) => {
          const firstComment = res.body[0];
          expect(firstComment)
            .to.have.property('_id')
            .and.to.be.a('string');
          expect(firstComment)
            .to.have.property('createdBy')
            .and.to.be.a('string');
          expect(firstComment)
            .to.have.property('content')
            .and.to.be.a('string');
          done();
        });
    });
  });

  describe('returns multiple comments', () => {

    beforeEach(done => {
      User
        .create({
          firstName: 'person',
          lastName: 'person',
          role: 'student',
          cohort: 'WDI-30',
          email: 'person@person.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .then((user) => {
          return Comment
            .create([{
              createdBy: user,
              content: 'Blah'
            }, {
              createdBy: user,
              content: 'Hello'
            }])
            .then(() => done())
            .catch(done);
        });
    });

    it('should create 2 comments', done => {
      api
        .get('/api/comments')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body.length).to.equal(2);
          done();
        });
    });
  });

  describe('POST /api/comments', () => {

    let user;

    beforeEach(done => {
      User
        .create({
          firstName: 'person',
          lastName: 'person',
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

    it('should return a 201 response', done => {
      api
        .post('/api/comments')
        .set('Accept', 'application/json')
        .send({
          createdBy: user.id,
          content: 'Blah'
        })
        .expect(201, done);
    });

    it('should create a new comment', done => {
      api
        .post('/api/comments')
        .set('Accept', 'application/json')
        .send({
          createdBy: user.id,
          content: 'Blah'
        })
        .end((err, res) => {
          const comment = res.body;

          expect(comment)
            .to.have.property('_id')
            .and.to.be.a('string');

          expect(comment)
            .to.have.property('createdBy')
            .and.to.be.a('string');

          expect(comment)
            .to.have.property('content')
            .and.to.be.a('string');

          expect(comment)
            .to.have.property('createdAt')
            .and.to.be.a('string');

          expect(comment)
            .to.have.property('updatedAt')
            .and.to.be.a('string');

          done();
        });

    });

  });

  describe('GET /api/comments/:id', () => {

    let comment;

    beforeEach(done => {
      User
        .create({
          firstName: 'person',
          lastName: 'person',
          role: 'student',
          cohort: 'WDI-30',
          email: 'person@person.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .then((user) => {
          return Comment
            .create({
              createdBy: user,
              content: 'Blah'
            })
            .then(commentData => {
              comment = commentData;
              done();
            })
            .catch(done);
        });
    });

    it('should return a 200 response', done => {
      api
        .get(`/api/comments/${comment.id}`)
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should return a JSON object', done => {
      api
        .get(`/api/comments/${comment.id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return object with properties:_id, createdBy, content', done => {
      api.get(`/api/comments/${comment.id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .and.have.all.keys([
              '__v',
              '_id',
              'createdBy',
              'content',
              'replies',
              'createdAt',
              'updatedAt'
            ]);
          done();
        });
    });
  });

  describe('PUT /api/comments/:id', () => {

    let comment;
    let user;

    beforeEach(done => {
      User
        .create({
          firstName: 'person',
          lastName: 'person',
          role: 'student',
          cohort: 'WDI-30',
          email: 'person@person.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .then((userData) => {
          user = userData;
          return Comment
            .create({
              createdBy: user,
              content: 'Blah'
            })
            .then(commentData => {
              comment = commentData;
              done();
            })
            .catch(done);
        });
    });

    it('should return 200 status', function(done) {
      api
        .put(`/api/comments/${comment.id}`)
        .set('Accept', 'application/json')
        .send({
          createdBy: user.id,
          content: 'Blah'
        })
        .expect(200, done);
    });

    it('should return a JSON object', done => {
      api
        .get(`/api/comments/${comment.id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return object with properties: _id, createdBy, content', done => {
      api.get(`/api/comments/${comment.id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .and.have.all.keys([
              '__v',
              '_id',
              'createdBy',
              'content',
              'replies',
              'createdAt',
              'updatedAt'
            ]);
          done();
        });
    });

    it('should return updated data', function(done) {
      api
        .put(`/api/comments/${comment.id}`)
        .set('Accept', 'application/json')
        .send({
          createdBy: user.id,
          content: 'Blah'
        })
        .end((err, res) => {
          expect(res.body.createdBy)
            .to.be.eq(user.id);
          done();
        });
    });
  });

  describe('DELETE /api/comments/:id', () => {

    let comment;

    beforeEach(done => {
      User
        .create({
          firstName: 'person',
          lastName: 'person',
          role: 'student',
          cohort: 'WDI-30',
          email: 'person@person.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .then((user) => {
          return Comment
            .create({
              createdBy: user,
              content: 'Blah'
            })
            .then(commentData => {
              comment = commentData;
              done();
            })
            .catch(done);
        });
    });

    it('should remove a comment by id', function(done) {
      api
        .delete(`/api/comments/${comment.id}`)
        .expect(204, done);
    });

  });

});
