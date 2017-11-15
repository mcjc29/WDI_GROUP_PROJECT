const express = require('express');
const router  = express.Router();
const authentications = require('../controllers/authentications');
const users = require('../controllers/users');
const lessons = require('../controllers/lessons');
const cohorts = require('../controllers/cohorts');
const comments = require('../controllers/comments');
const ratings = require('../controllers/ratings');
const fileUpload = require('../lib/fileUpload');

router.route('/register')
  .post(authentications.register);

router.route('/login')
  .post(authentications.login);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/ratings')
  .get(ratings.index)
  .post(ratings.create);

router.route('/lessons')
  .get(lessons.index)
  .post(fileUpload, lessons.create);

router.route('/lessons/:id')
  .get(lessons.show)
  .put(lessons.update)
  .delete(lessons.delete);

router.route('/cohorts')
  .get(cohorts.index)
  .post(cohorts.create);

router.route('/cohorts/:id')
  .get(cohorts.show)
  .put(cohorts.update)
  .delete(cohorts.delete);

router.route('/comments')
  .get(comments.index)
  .post(comments.create);

router.route('/comments/:id')
  .get(comments.show)
  .put(comments.update)
  .delete(comments.delete);

router.route('/comments/:id/replies')
  .post(comments.replyCreate);

router.route('/comments/:id/replies/:replyId')
  .delete(comments.replyDelete);

module.exports = router;
