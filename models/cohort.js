const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const cohortSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    city: String,
    taughtBy: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

cohortSchema.plugin(beautifyUnique);

module.exports = mongoose.model('Cohort', cohortSchema);
