angular
  .module('gaFeedback')
  .factory('User', User);

User.$inject = ['API', '$resource'];

function User(API, $resource) {
  return $resource(`${API}/users/:id`, {
    id: '@_id'
  }, {
    update: { method: 'PUT' },
    login: { method: 'POST', url: `${API}/login` },
    register: { method: 'POST', url: `${API}/register` }
  });
}
