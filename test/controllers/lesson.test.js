/* globals api, expect, describe, beforeEach, afterEach, it */

require('../spec_helper');

const Lesson = require('../../models/lesson');

describe('Lessons', function() {

  beforeEach(done => {
    Lesson.collection.remove();
    done();
  });

  afterEach(done => {
    Lesson.collection.remove();
    done();
  });

  describe('GET /api/lessons', () => {
    beforeEach(done => {
      Lesson.create({
        title: 'Basic Terminal, Navigating the Filesystem',
        duration: '1:25',
        creator: 'Alex Chin',
        city: 'London',
        competencies: 'Programming, Server Applications',
        taughtBy: 'Alex Chin'
      })
        .then(() => done())
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get('/api/lessons')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should return an array of lessons', function(done) {
      api
        .get('/api/lessons')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of lessons objects', function(done) {
      api
        .get('/api/lessons')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .to.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              '__v',
              '_id',
              'title',
              'duration',
              'creator',
              'city',
              'competencies',
              'taughtBy'
            ]);
          done();
        });
    });

    it('should have properties: _id, title, duration, creator, city, taughtBy', function(done) {
      api
        .get('/api/lessons')
        .set('Accept', 'application/json')
        .end((err, res) => {
          const firstLesson = res.body[0];
          expect(firstLesson)
            .to.have.property('_id')
            .and.to.be.a('string');
          expect(firstLesson)
            .to.have.property('title')
            .and.to.be.a('string');
          expect(firstLesson)
            .to.have.property('duration')
            .and.to.be.a('string');
          expect(firstLesson)
            .to.have.property('creator')
            .and.to.be.a('string');
          expect(firstLesson)
            .to.have.property('city')
            .and.to.be.a('string');
          expect(firstLesson)
            .to.have.property('competencies')
            .and.to.be.a('string');
          expect(firstLesson)
            .to.have.property('taughtBy')
            .and.to.be.a('string');
          done();
        });
    });
  });
});
