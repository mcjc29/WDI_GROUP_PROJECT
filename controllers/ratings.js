const Rating = require('../models/rating');

function ratingsCreate(req, res, next) {
  Rating
    .create(req.body)
    .then((rating) => res.status(201).json(rating))
    .catch(next);
}
module.exports = {
  create: ratingsCreate
};
