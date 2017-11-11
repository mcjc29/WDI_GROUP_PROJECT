const Lesson = require('../models/lesson');

function lessonsIndex(req, res, next) {
  Lesson
    .find()
    .exec()
    .then((lesson) => res.status(200).json(lesson))
    .catch(next);
}

module.exports = {
  index: lessonsIndex
};
