angular
  .module('gaFeedback')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$auth', '$state', 'currentUserService'];

function LoginCtrl($auth, $state, currentUserService) {
  const vm = this;
  vm.submitForm = login;

  function login() {
    $auth
      .login(vm.user)
      .then(() => {
        currentUserService.getUser();
        $state.go('ratingsIndex');
      });
  }
}
