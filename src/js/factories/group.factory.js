angular
  .module('gaFeedback')
  .factory('Cohort', Cohort);

Cohort.$inject = ['API', '$resource'];

function Cohort(API, $resource) {
  return $resource(`${API}/cohorts/:id`, {
    id: '@_id'
  }, {
    update: { method: 'PUT' }
  });
}
