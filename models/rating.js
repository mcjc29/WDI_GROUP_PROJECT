const mongoose  = require('mongoose');

const ratingSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  pace: { type: Number, required: true },
  concepts: { type: Number, required: true },
  syntax: { type: Number, required: true },
  confidence: { type: Number, required: true },
  message: String,
  needHelp: Boolean
}, {
  timestamps: true
});

ratingSchema.statics.findAndGroup = findAndGroup;

ratingSchema.methods.belongsTo = function ratingBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

module.exports = mongoose.model('Rating', ratingSchema);


function findAndGroup(req, res) {
  const self = this;

  return new Promise((resolve, reject) => {
    self
      .find()
      .exec()
      .then(ratings => {
        if (!ratings) return res.notFound();
        console.log('these are the ratings from the findAndGroup method', ratings);
        // grouping here

        const pace = [];
        ratings.filter(ratings => pace.push(ratings.pace));
console.log('I AM PACE',pace);

const concepts = [];
ratings.filter(ratings => concepts.push(ratings.concepts));
console.log('I AM CONCEPTS', concepts);

const syntax = [];
ratings.filter(ratings => syntax.push(ratings.syntax));
console.log('I AM SYNTAX', syntax);

const confidence = [];
ratings.filter(ratings => confidence.push(ratings.confidence));
console.log('I AM CONFIDENCE', confidence);



        // return resolve(ratings)
      })
      .catch(reject);
  });


  // const self = this;
  // return new Promise((resolve, reject) => {
  //   self
  //     .find()
  //     .exec()
  //     .then((rating) => {
  //       if (!rating) return res.notFound();
  //       console.log(rating);
  //
  //     })
  //     .catch(reject);
  // });
}
