angular
  .module('gaFeedback')
  .controller('UsersEditCtrl', UsersEditCtrl);

<<<<<<< HEAD
UsersEditCtrl.$inject = ['User', '$stateParams', '$state'];
=======
UsersEditCtrl.$inject = ['User', '$stateParams'];
>>>>>>> 74deb4e160ea97c1c44e30af52e4b113f28e6585

function UsersEditCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);
  vm.submit = user => {
    User
      .update({ id: user.id }, user)
      .$promise
      .then(user => {
        $state.go('usersShow', { id: user.id });
<<<<<<< HEAD
      });
=======
      });  
>>>>>>> 74deb4e160ea97c1c44e30af52e4b113f28e6585
  };
}
