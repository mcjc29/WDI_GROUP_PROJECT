const mongoose  = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: String,
  duration: String,
  creator:
      {name: String, city: String},
  competencies: String,
  taughtBy: String
});

module.exports = mongoose.model('lessonSchema', lessonSchema);
