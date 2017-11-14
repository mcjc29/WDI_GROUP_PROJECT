angular
  .module('gaFeedback')
  .controller('ChatCtrl', ChatCtrl);

ChatCtrl.$inject = ['Comment'];

function ChatCtrl(Comment) {
  const vm = this;

  Comment
    .query()
    .$promise
    .then(data => {
      vm.comments = data.reverse();
    });

  vm.submit = addComment;

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
}
