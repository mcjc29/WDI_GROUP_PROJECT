angular
  .module('gaFeedback')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User'];
function UsersIndexCtrl(User) {
  const vm = this;
  vm.user = User.query();
  console.log(vm.user);
}
