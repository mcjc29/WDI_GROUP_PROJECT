angular
  .module('gaFeedback')
  .controller('ChatCtrl', ChatCtrl);

ChatCtrl.$inject = ['Comment'];

function ChatCtrl(Comment) {
  const vm = this;
  vm.comments = Comment.query();

  vm.submit = addComment;

  function addComment() {
    const newComment = {
      content: vm.newComment
    };
    Comment
      .save(newComment)
      .$promise
      .then(() => {
        vm.comments = Comment.query();
        vm.newComment = '';
      });
  }
}
