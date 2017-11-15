/* globals api, expect, describe, beforeEach, afterEach, it */

require('../spec_helper');

const Rating = require('../../models/rating');

describe('Ratings', function() {

  beforeEach(done => {
    Rating.collection.remove();
    done();
  });

  afterEach(done => {
    Rating.collection.remove();
    done();
  });

  describe('GET /api/ratings', () => {
    beforeEach(done => {
      Rating.create({
        createdBy: 'person',
        pace: 10,
        concepts: 10,
        syntax: 10,
        confidence: 10,
        message: 'lovin it'
      })
        .then(() => done())
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get('/api/ratings')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .expect(200, done);
    });

    it('should return a JSON object', done => {
      api
        .get('/api/ratings')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return an array of ratings', function(done) {
      api
        .get('/api/ratings')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of ratings objects', function(done) {
      api
        .get('/api/ratings')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .end((err, res) => {
          expect(res.body)
            .to.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              '__v',
              '_id',
              'createdBy',
              'pace',
              'concepts',
              'syntax',
              'confidence',
              'message',
              'createdAt',
              'updatedAt'
            ]);
          done();
        });
    });

    it('should have properties: _id, createdBy, pace, concepts, syntax, confidence, message, createdAt, updatedAt', function(done) {
      api
        .get('/api/ratings')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .end((err, res) => {
          const firstRating = res.body[0];
          expect(firstRating)
            .to.have.property('_id')
            .and.to.be.a('string');
          expect(firstRating)
            .to.have.property('createdBy')
            .and.to.be.a('object');
          expect(firstRating)
            .to.have.property('pace')
            .and.to.be.a('number');
          expect(firstRating)
            .to.have.property('concepts')
            .and.to.be.a('number');
          expect(firstRating)
            .to.have.property('syntax')
            .and.to.be.a('number');
          expect(firstRating)
            .to.have.property('confidence')
            .and.to.be.a('number');
          expect(firstRating)
            .to.have.property('message')
            .and.to.be.a('string');
          done();
        });
    });
  });

  describe('returns multiple ratings', () => {

    beforeEach(done => {
      Rating.create([
        {
          createdBy: 'person',
          pace: 10,
          concepts: 10,
          syntax: 10,
          confidence: 10,
          message: 'lovin it'
        },
        {
          createdBy: 'person2',
          pace: 11,
          concepts: 10,
          syntax: 11,
          confidence: 11,
          message: 'yay'
        }
      ])
        .then(() => done())
        .catch(done);
    });

    it('should create 2 ratings', done => {
      api
        .get('/api/ratings')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .end((err, res) => {
          expect(res.body.length).to.equal(2);
          done();
        });
    });
  });

  describe('POST /api/ratings', () => {

    it('should return a 201 response', done => {
      api
        .post('/api/ratings')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .send({
          createdBy: 'person',
          pace: 10,
          concepts: 10,
          syntax: 10,
          confidence: 10,
          message: 'lovin it'
        })
        .expect(201, done);
    });

    it('should create a new rating', done => {
      api
        .post('/api/ratings')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBiZDhkYTA2NTY4OTJlZTMyNTc4YjMiLCJpYXQiOjE1MTA3MjcxNTMsImV4cCI6MTUxMDgxMzU1M30.s65ZTkNYlk2FB73hCSkWwJPDfhD-f7I9E4CanPrYWHY')
        .send({
          createdBy: 'person',
          pace: 10,
          concepts: 10,
          syntax: 10,
          confidence: 10,
          message: 'lovin it'
        })
        .end((err, res) => {
          const firstRating = res.body;

          expect(firstRating)
            .to.have.property('_id')
            .and.to.be.a('string');
          expect(firstRating)
            .to.have.property('createdBy')
            .and.to.be.a('string');
          expect(firstRating)
            .to.have.property('pace')
            .and.to.be.a('number');
          expect(firstRating)
            .to.have.property('concepts')
            .and.to.be.a('number');
          expect(firstRating)
            .to.have.property('syntax')
            .and.to.be.a('number');
          expect(firstRating)
            .to.have.property('confidence')
            .and.to.be.a('number');
          expect(firstRating)
            .to.have.property('message')
            .and.to.be.a('string');
          expect(firstRating)
            .to.have.property('createdAt')
            .and.to.be.a('string');

          expect(firstRating)
            .to.have.property('updatedAt')
            .and.to.be.a('string');

          done();
        });

    });

  });



});
