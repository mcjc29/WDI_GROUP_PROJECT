const mongoose  = require('mongoose');

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: String,
  taughtBy: { type: String, required: true }
});

module.exports = mongoose.model('classSchema', classSchema);
