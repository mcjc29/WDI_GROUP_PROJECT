angular
  .module('gaFeedback')
  .factory('Comment', Comment);

Comment.$inject = ['API', '$resource'];

function Comment(API, $resource) {
  return $resource(`${API}/comments/:id`, {
    id: '@_id'
  }, {
    update: { method: 'PUT' }
  });
}
