const Rating = require('../models/rating');

function ratingsIndex(req, res, next) {
  Rating
    .find()
    .populate('createdBy')
    .exec()
    .then((ratings) => res.status(200).json(ratings))
    .catch(next);
}

function ratingsCreate(req, res, next) {
  const rating = req.body;
  rating.createdBy = req.user;
  Rating
    .create(rating)
    .then((rating) => res.status(201).json(rating))
    .catch(next);
}

module.exports = {
  index: ratingsIndex,
  create: ratingsCreate
};
