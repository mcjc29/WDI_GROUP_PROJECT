const Rating = require('../models/rating');

function ratingsIndex(req, res, next) {
  Rating
    .find()
    .exec()
    .then((ratings) => res.status(200).json(ratings))
    .catch(next);
}

function ratingsCreate(req, res, next) {
  Rating
    .create(req.body)
    .then((rating) => res.status(201).json(rating))
    .catch(next);
}
module.exports = {
  index: ratingsIndex,
  create: ratingsCreate
};
