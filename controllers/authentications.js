const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function authenticationsRegister(req, res, next) {
  User.create(req.body)
    .then(user => {
      const payload = { _id: user.id };
      const token = jwt.sign(payload, secret, { expiresIn: 60 * 60 * 24 });
      return res.status(200).json({
        message: `Welcome ${user.firstName}!`,
        token,
        user
      });
    })
    .catch(next);
}

function authenticationsLogin(req, res, next) {
  User.findOne({
    email: req.body.email
  })
    .exec()
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Invalid credentials.' });
      }
      const payload = { _id: user.id };
      const token = jwt.sign(payload, secret, { expiresIn: 60 * 60 * 24 });
      return res.status(200).json({
        message: `Welcome back ${user.firstName}!`,
        token,
        user
      });
    })
    .catch(next);
}

module.exports = {
  register: authenticationsRegister,
  login: authenticationsLogin
};
