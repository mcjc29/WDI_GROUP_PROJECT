angular
  .module('gaFeedback')
  .factory('Lesson', Lesson);

Lesson.$inject = ['API', '$resource'];

function Lesson(API, $resource) {
  return $resource(`${API}/lessons/:id`, {
    id: '@_id'
  }, {
    update: { method: 'PUT' }
  });
}
