angular
  .module('gaFeedback')
  .service('currentUserService', currentUserService);

currentUserService.$inject = ['$auth', 'User', '$rootScope'];

function currentUserService($auth, User, $rootScope) {
  const self = this;
  self.getUser = () => {
    // takes token from local storage and converts it into object containing payload (userId)
    // userId is defined in the authentication controller
    const decoded = $auth.getPayload();
    // if decoded isn't falsey...
    if (decoded) {
      User
        .get({ id: decoded.userId })
        .$promise
        .then(user => {
          // using ID from the token to find user in db, once returned store on service to be used in other modules
          self.currentUser = user;
          // $rootScope communicates between modules ($scope communicates with views)
          $rootScope.$broadcast('loggedIn');
        });
    }
  };
  // logout functionality. Sets user to null, removes token and broadcasts logged out.
  self.removeUser = () => {
    self.currentUser = null;
    $auth.logout();
    $rootScope.$broadcast('loggedOut');
  };
  self.getUser();
}
