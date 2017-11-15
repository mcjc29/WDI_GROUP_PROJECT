angular
  .module('gaFeedback')
  .factory('Comment', Comment);

Comment.$inject = ['API', '$resource'];

function Comment(API, $resource) {
  return $resource(`${API}/comments/:id`, {
    id: '@_id'
  }, {
    update: { method: 'PUT' },
    replyCreate: { method: 'POST', url: `${API}/comments/:id/replies`},
    replyDelete: { method: 'DELETE', url: `${API}/comments/:id/replies/:replyId`}
  });
}
