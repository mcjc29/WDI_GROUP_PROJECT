angular
  .module('gaFeedback')
  .controller('ChatCtrl', ChatCtrl);

ChatCtrl.$inject = ['Comment', '$moment', '$rootScope', '$state'];

function ChatCtrl(Comment, $moment, $rootScope) {
  const vm = this;
  vm.submit = addComment;
  vm.delete = deleteComment;
  vm.deleteReply = deleteReply;
  vm.submitReply = addReply;

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
            vm.comments.forEach(comment => {
              comment.createdAt = $moment(comment.createdAt).fromNow();
              comment.replies.forEach(reply => {
                reply.createdAt = $moment(reply.createdAt).fromNow();
              });
            });
            vm.newComment = '';
          });
      });
  }

  function deleteComment(comment) {
    Comment
      .remove({ id: comment._id })
      .$promise
      .then(() => {
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
      });
  }

  function addReply(comment) {
    const reply = document.getElementById(comment._id).value;
    vm.newReply = {
      content: reply
    };
    Comment
      .replyCreate({ id: comment._id }, vm.newReply)
      .$promise
      .then(() => {
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
            document.getElementById(comment._id).value = '';
          });
      });
  }

  function deleteReply(comment, reply) {
    Comment
      .replyDelete({ id: comment._id, replyId: reply._id })
      .$promise
      .then(() => {
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
      });
  }

}
