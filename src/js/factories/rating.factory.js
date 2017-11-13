angular
  .module('gaFeedback')
  .factory('Rating', Rating);

Rating.$inject = ['API', '$resource'];

function Rating(API, $resource) {
  return $resource(`${API}/ratings/:id`, {
    id: '@_id'
  }, {
    update: { method: 'PUT' }
  });
}
