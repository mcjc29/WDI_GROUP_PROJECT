const Comment = require('../models/comment');

function commentsIndex(req, res, next) {
  Comment
    .find()
    .populate('createdBy replies.createdBy')
    .exec()
    .then((comment) => res.status(200).json(comment))
    .catch(next);
}

function commentsCreate(req, res, next) {
  const comment = req.body;
  comment.createdBy = req.user;
  Comment
    .create(comment)
    .then((comment) => res.status(201).json(comment))
    .catch(next);
}

function commentsShow(req, res, next) {
  Comment
    .findById(req.params.id)
    .exec()
    .then((comment) => {
      if(!comment) return res.notFound();
      res.json(comment);
    })
    .catch(next);
}

function commentsUpdate(req, res, next) {
  Comment
    .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .exec()
    .then(comment => res.status(200).json(comment))
    .catch(next);
}

function commentsDelete(req, res, next) {
  Comment
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: commentsIndex,
  create: commentsCreate,
  show: commentsShow,
  delete: commentsDelete,
  update: commentsUpdate
};
