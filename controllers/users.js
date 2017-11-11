const User       = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .exec()
    .then((user) => res.status(200).json(user))
    .catch(next);
}

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      res.json(user);
    })
    .catch(next);
}

module.exports = {
  index: usersIndex,
  show: usersShow
};
