angular
  .module('gaFeedback')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['User', '$stateParams'];

function UsersEditCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);
  vm.submit = user => {
    User
      .update({ id: user.id }, user)
      .$promise
      .then(user => {
        $state.go('usersShow', { id: user.id });
      });  
  };
}
