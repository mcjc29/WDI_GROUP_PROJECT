const mongoose  = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: String,
  creator: String,
  city: String,
  competencies: { type: String, required: true },
  taughtBy: { type: String, required: true }
});

module.exports = mongoose.model('lessonSchema', lessonSchema);
