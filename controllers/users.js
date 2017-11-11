const User       = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .exec()
    .then((user) => res.status(200).json(user))
    .catch(next);
}


module.exports = {
  index: usersIndex
};
