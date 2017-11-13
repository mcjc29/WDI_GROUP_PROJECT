angular
  .module('gaFeedback')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'currentUserService', '$state'];

function MainCtrl($rootScope, currentUserService, $state) {

  const vm = this;

  vm.logout = logout;

  $rootScope.$on('loggedIn', () => {
    vm.user = currentUserService.currentUser;
  });

  function logout() {
    currentUserService.removeUser();
  }

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('home');
  });

}
