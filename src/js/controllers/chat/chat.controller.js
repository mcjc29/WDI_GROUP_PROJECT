angular
  .module('gaFeedback')
  .controller('ChatCtrl', ChatCtrl);

ChatCtrl.$inject = ['Comment'];

function ChatCtrl(Comment) {
  const vm = this;
  vm.comment = Comment.query();
}
