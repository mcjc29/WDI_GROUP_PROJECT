const Lesson = require('../models/lesson');

function lessonsIndex(req, res, next) {
  Lesson
    .find()
    .exec()
    .then((lesson) => res.status(200).json(lesson))
    .catch(next);
}

function lessonsShow(req, res, next) {
  Lesson
    .findById(req.params.id)
    .exec()
    .then((lesson) => {
      if(!lesson) return res.notFound();
      res.json(lesson);
    })
    .catch(next);
}

function lessonsUpdate(req, res, next) {
  Lesson
    .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .exec()
    .then(lesson => res.status(200).json(lesson))
    .catch(next);
}

function lessonsDelete(req, res, next) {
  Lesson
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: lessonsIndex,
  show: lessonsShow,
  delete: lessonsDelete,
  update: lessonsUpdate
};
