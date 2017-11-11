angular
  .module('gaFeedback')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['$auth', '$state', 'currentUserService'];

function RegisterCtrl($auth, $state, currentUserService) {
  const vm = this;
  vm.submitForm = register;
  
  function register() {
    $auth
      .signup(vm.user)
      .then(() => $auth.login(vm.user))
      .then(() => {
        currentUserService.getUser();
        $state.go('home');
      });
  }
}
