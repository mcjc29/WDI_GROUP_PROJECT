angular
  .module('gaFeedback')
  .controller('ChatCtrl', ChatCtrl);

ChatCtrl.$inject = ['Comment'];

function ChatCtrl(Comment) {
  const vm = this;
  vm.addReply = false;

  Comment
    .query()
    .$promise
    .then(data => {
      vm.comments = data.reverse();
      vm.comments.forEach(comment => {
        comment.createdAt = comment.createdAt.toDateString();
      });
    });

  vm.submit = addComment;
  vm.showReplyForm = showReply;

  function addComment() {
    const newComment = {
      content: vm.newComment
    };
    Comment
      .save(newComment)
      .$promise
      .then(() => {
        Comment
          .query()
          .$promise
          .then(data => {
            vm.comments = data.reverse();
          });
        vm.newComment = '';
      });
  }

  function showReply() {
    vm.addReply = true;
  }
}
