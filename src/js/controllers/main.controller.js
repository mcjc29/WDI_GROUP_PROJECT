angular
  .module('gaFeedback')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'currentUserService', '$state', '$transitions'];

function MainCtrl($rootScope, currentUserService, $state, $transitions) {

  const vm = this;

  vm.logout = logout;
  vm.showBurgerMenu = false;

  $rootScope.$on('loggedIn', () => {
    vm.user = currentUserService.currentUser;
    $rootScope.$broadcast('user defined', {
      user: vm.user
    });
  });

  function logout() {
    currentUserService.removeUser();
  }

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('home');
  });

  $transitions.onSuccess({}, function() {
    vm.showBurgerMenu = false;
  });
  //have changed how state chnage sucess works - now use transitions and then inject what you want to happen on change
}
