angular
  .module('gaFeedback')
  .controller('ChatCtrl', ChatCtrl);

ChatCtrl.$inject = ['Comment', '$moment', '$rootScope', '$state'];

function ChatCtrl(Comment, $moment, $rootScope, $state) {
  const vm = this;
  vm.submit = addComment;
  vm.delete = deleteComment;

  $rootScope.$on('user defined', (event, data) => {
    vm.user = data.user;
  });

  Comment
    .query()
    .$promise
    .then(data => {
      vm.comments = data.reverse();
      vm.comments.forEach(comment => {
        comment.createdAt = $moment(comment.createdAt).fromNow();
        comment.replies.forEach(reply => {
          reply.createdAt = $moment(reply.createdAt).fromNow();
        });
      });
    });

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

  function deleteComment(comment) {
    Comment
      .remove({ id: comment.id })
      .$promise
      .then(() => {
        $state.go('studentsIndex');
      });
  }

}
