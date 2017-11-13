const mongoose  = require('mongoose');

const ratingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  pace: { type: Number, required: true },
  concepts: { type: Number, required: true },
  syntax: { type: Number, required: true },
  understanding: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Rating', ratingSchema);
