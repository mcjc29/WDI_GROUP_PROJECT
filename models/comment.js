const mongoose = require('mongoose');

const replySchema = new mongoose.Schema(
  {
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const commentSchema = new mongoose.Schema(
  {
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    replies: [replySchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('commentSchema', commentSchema);
