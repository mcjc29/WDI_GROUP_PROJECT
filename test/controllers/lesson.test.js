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
        date: '2/29/1992',
        startTime: new Date(1776, 4, 5, 10, 30),
        endTime: new Date(1776, 4, 5, 11, 30),
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
              'startTime',
              'endTime',
              'creator',
              'city',
              'competencies',
              'taughtBy',
              'createdAt',
              'updatedAt'
            ]);
          done();
        });
    });

    it('should have properties: _id, title, startTime, endTime, creator, city, competencies, taughtBy', function(done) {
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
            .to.have.property('startTime')
            .and.to.be.a('date');
          expect(firstLesson)
            .to.have.property('endTime')
            .and.to.be.a('date');
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
          startTime: new Date(1776, 4, 5, 10, 30),
          endTime: new Date(1776, 4, 5, 11, 30),
          creator: 'Alex Chin',
          city: 'London',
          competencies: 'Programming, Server Applications',
          taughtBy: 'Alex Chin'
        },
        {
          title: 'TDD',
          startTime: new Date(1776, 4, 5, 10, 30),
          endTime: new Date(1776, 4, 5, 11, 30),
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

  describe('POST /api/lessons', () => {

    it('should return a 201 response', done => {
      api
        .post('/api/lessons')
        .set('Accept', 'application/json')
        .send({
          title: 'Basic Terminal, Navigating the Filesystem',
          startTime: new Date(1776, 4, 5, 10, 30),
          endTime: new Date(1776, 4, 5, 11, 30),
          creator: 'Alex Chin',
          city: 'London',
          competencies: 'Programming, Server Applications',
          taughtBy: 'Alex Chin'
        })
        .expect(201, done);
    });

    it('should create a new lesson', done => {
      api
        .post('/api/lessons')
        .set('Accept', 'application/json')
        .send({
          title: 'Basic Terminal, Navigating the Filesystem',
          startTime: new Date(1776, 4, 5, 10, 30),
          endTime: new Date(1776, 4, 5, 11, 30),
          creator: 'Alex Chin',
          city: 'London',
          competencies: 'Programming, Server Applications',
          taughtBy: 'Alex Chin'
        })
        .end((err, res) => {
          const firstLesson = res.body;

          expect(firstLesson)
            .to.have.property('_id')
            .and.to.be.a('string');
          expect(firstLesson)
            .to.have.property('title')
            .and.to.be.a('string');
          expect(firstLesson)
            .to.have.property('startTime')
            .and.to.be.a('date');
          expect(firstLesson)
            .to.have.property('endTime')
            .and.to.be.a('date');
          expect(firstLesson)
            .to.have.property('creator')
            .and.to.be.a('string');
          expect(firstLesson)
            .to.have.property('city')
            .and.to.be.a('string');
          expect(firstLesson)
            .to.have.property('taughtBy')
            .and.to.be.a('string');
          expect(firstLesson)
            .to.have.property('createdAt')
            .and.to.be.a('string');

          expect(firstLesson)
            .to.have.property('updatedAt')
            .and.to.be.a('string');

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
          startTime: new Date(1776, 4, 5, 10, 30),
          endTime: new Date(1776, 4, 5, 11, 30),
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
    it('should return object with properties:_id, title, startTime, endTime, creator, city, competencies, taughtBy, createdAt, updatedAt', done => {
      api.get(`/api/lessons/${lesson.id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .and.have.all.keys([
              '__v',
              '_id',
              'title',
              'startTime',
              'endTime',
              'creator',
              'city',
              'competencies',
              'taughtBy',
              'createdAt',
              'updatedAt'
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
          startTime: new Date(1776, 4, 5, 10, 30),
          endTime: new Date(1776, 4, 5, 11, 30),
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
          startTime: new Date(1776, 4, 5, 10, 30),
          endTime: new Date(1776, 4, 5, 11, 30),
          creator: 'Alex Chin',
          city: 'London',
          competencies: 'Programming, Server Applications',
          taughtBy: 'Rane'
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
    it('should return object with properties: _id, title, startTime, endTime, creator, city, competencies, taughtBy, createdAt, updatedAt', done => {
      api.get(`/api/lessons/${lesson.id}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .and.have.all.keys([
              '__v',
              '_id',
              'title',
              'startTime',
              'endTime',
              'creator',
              'city',
              'competencies',
              'taughtBy',
              'createdAt',
              'updatedAt'
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
          startTime: new Date(1776, 4, 5, 10, 30),
          endTime: new Date(1776, 4, 5, 11, 30),
          creator: 'Alex Chin',
          city: 'London',
          competencies: 'Programming, Server Applications',
          taughtBy: 'Rane'
        })
        .end((err, res) => {
          expect(res.body.taughtBy)
            .to.be.eq('Rane');
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
          startTime: new Date(1776, 4, 5, 10, 30),
          endTime: new Date(1776, 4, 5, 11, 30),
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
