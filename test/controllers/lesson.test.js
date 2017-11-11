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

    it('should return a JSON object', done => {
      api
        .get('/api/lessons')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
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

  describe('returns multiple lessons', () => {

    beforeEach(done => {
      Lesson.create([
        {
          title: 'Basic Terminal, Navigating the Filesystem',
          duration: '1:25',
          creator: 'Alex Chin',
          city: 'London',
          competencies: 'Programming, Server Applications',
          taughtBy: 'Alex Chin'
        },
        {
          title: 'TDD',
          duration: '1:25',
          creator: 'Rane Gowan',
          city: 'London',
          competencies: 'Programming',
          taughtBy: 'Rane Gowan'
        }
      ])
        .then(() => done())
        .catch(done);
    });

    it('should create 2 lessons', done => {
      api
        .get('/api/lessons')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body.length).to.equal(2);
          done();
        });
    });
  });

  describe('GET /api/lessons/:id', () => {

    let lesson;

    beforeEach(done => {
      Lesson
        .create({
          title: 'Basic Terminal, Navigating the Filesystem',
          duration: '1:25',
          creator: 'Alex Chin',
          city: 'London',
          competencies: 'Programming, Server Applications',
          taughtBy: 'Alex Chin'
        })
        .then(lessonData => {
          lesson = lessonData;
          done();
        })
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get(`/api/lessons/${lesson.id}`)
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should return a JSON object', done => {
      api
        .get(`/api/lessons/${lesson.id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });
    it('should return object with properties:_id, title, duration, creator, city, taughtBy', done => {
      api.get(`/api/lessons/${lesson.id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
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
  });

  describe('PUT /api/lessons/:id', () => {

    let lesson;

    beforeEach(done => {
      Lesson
        .create({
          title: 'Basic Terminal, Navigating the Filesystem',
          duration: '1:25',
          creator: 'Alex Chin',
          city: 'London',
          competencies: 'Programming, Server Applications',
          taughtBy: 'Alex Chin'
        })
        .then(lessonData => {
          lesson = lessonData;
          done();
        })
        .catch(done);
    });

    it('should return 200 status', function(done) {
      api
        .put(`/api/lessons/${lesson.id}`)
        .set('Accept', 'application/json')
        .send({
          title: 'Basic Terminal, Navigating the Filesystem',
          duration: '1',
          creator: 'Alex Chin',
          city: 'London',
          competencies: 'Programming, Server Applications',
          taughtBy: 'Alex Chin'
        })
        .expect(200, done);
    });
    it('should return a JSON object', done => {
      api
        .get(`/api/lessons/${lesson.id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });
    it('should return object with properties: _id, firstName, lastName, image, role, email, createdAt, updatedAt', done => {
      api.get(`/api/lessons/${lesson.id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
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
    it('should return updated data', function(done) {
      api
        .put(`/api/lessons/${lesson.id}`)
        .set('Accept', 'application/json')
        .send({
          title: 'Basic Terminal, Navigating the Filesystem',
          duration: '1',
          creator: 'Alex Chin',
          city: 'London',
          competencies: 'Programming, Server Applications',
          taughtBy: 'Alex Chin'
        })
        .end((err, res) => {
          expect(res.body.duration)
            .to.be.eq('1');
          done();
        });
    });

  });

  describe('DELETE /api/lessons/:id', () => {

    let lesson;

    beforeEach(done => {
      Lesson
        .create({
          title: 'Basic Terminal, Navigating the Filesystem',
          duration: '1',
          creator: 'Alex Chin',
          city: 'London',
          competencies: 'Programming, Server Applications',
          taughtBy: 'Alex Chin'
        })
        .then(lessonData => {
          lesson = lessonData;
          done();
        })
        .catch(done);
    });

    it('should remove a lesson by id', function(done) {
      api
        .delete(`/api/lessons/${lesson.id}`)
        .expect(204, done);
    });
  });
});
