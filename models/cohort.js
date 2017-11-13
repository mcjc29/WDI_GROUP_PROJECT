const mongoose  = require('mongoose');

const cohortSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: String,
  taughtBy: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Cohort', cohortSchema);
