angular
  .module('gaFeedback')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['User', '$stateParams', '$state'];

function UsersEditCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);
  vm.submit = () => {
    User
      .update({ id: $stateParams.id }, vm.user)
      .$promise
      .then(() => {
        $state.go('usersShow', { id: $stateParams.id });
      });
  };
}
