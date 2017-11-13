const mongoose  = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  startTime: Date,
  endTime: Date,
  creator: String,
  city: String,
  competencies: { type: String, required: true },
  taughtBy: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Lesson', lessonSchema);
