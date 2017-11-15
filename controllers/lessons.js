const Lesson = require('../models/lesson');

function lessonsIndex(req, res, next) {
  Lesson
    .find()
    .exec()
    .then((lesson) => res.status(200).json(lesson))
    .catch(next);
}

function lessonsCreate(req, res, next) {
  // if(req.file) req.body.lessonNotes = req.file.filename;

  Lesson
    .create(req.body)
    .then((lesson) => res.status(201).json(lesson))
    .catch(next);
}

function lessonsShow(req, res, next) {
  // if(req.file) req.body.lessonNotes = req.file.filename;

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
  // if(req.file) req.body.lessonNotes = req.file.filename;

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
  create: lessonsCreate,
  show: lessonsShow,
  delete: lessonsDelete,
  update: lessonsUpdate
};
