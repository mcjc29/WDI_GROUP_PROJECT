const express = require('express');
const router  = express.Router();
const authentications = require('../controllers/authentications');
const users = require('../controllers/users');
const lessons = require('../controllers/lessons');
const groups = require('../controllers/groups');

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

router.route('/lessons')
  .get(lessons.index);

router.route('/lessons/:id')
  .get(lessons.show)
  .put(lessons.update)
  .delete(lessons.delete);

router.route('/groups')
  .get(groups.index);

router.route('/groups/:id')
  .get(groups.show)
  .put(groups.update)
  .delete(groups.delete);

module.exports = router;
