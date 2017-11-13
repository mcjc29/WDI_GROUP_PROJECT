const Cohort = require('../models/cohort');

function cohortsIndex(req, res, next) {
  Cohort
    .find()
    .exec()
    .then((cohort) => res.status(200).json(cohort))
    .catch(next);
}

function cohortsCreate(req, res, next) {
  Cohort
    .create(req.body)
    .then((cohort) => res.status(201).json(cohort))
    .catch(next);
}

function cohortsShow(req, res, next) {
  Cohort
    .findById(req.params.id)
    .exec()
    .then((cohort) => {
      if(!cohort) return res.notFound();
      res.json(cohort);
    })
    .catch(next);
}

function cohortsUpdate(req, res, next) {
  Cohort
    .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .exec()
    .then(cohort => res.status(200).json(cohort))
    .catch(next);
}

function cohortsDelete(req, res, next) {
  Cohort
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: cohortsIndex,
  create: cohortsCreate,
  show: cohortsShow,
  delete: cohortsDelete,
  update: cohortsUpdate
};
