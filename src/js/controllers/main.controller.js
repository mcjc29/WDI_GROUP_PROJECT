angular
  .module('gaFeedback')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', 'currentUserService'];

function MainCtrl($rootScope, $state, currentUserService) {
  const vm = this;
  
  vm.logout = logout;
  // bit like an event listener, when loggedIn is broadcast (from service), do function
  $rootScope.$on('loggedIn', () => {
    console.log('fired');
    vm.user = currentUserService.currentUser;
    console.log(vm.user);
  });
  function logout() {
    currentUserService.removeUser();
  }
  // log out broadcast listener
  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('home');
  });
}
