const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  createdBy: String,
  // content: String
  content: { type: String, required: true }
}, {
  timestamps: true
});

replySchema.methods.belongsTo = function replyBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

const commentSchema = new mongoose.Schema({
  createdBy: String,
  content: { type: String, required: true },
  reply: [replySchema]
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

module.exports = mongoose.model('commentSchema', commentSchema);
