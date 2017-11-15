angular
  .module('gaFeedback')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User', '$scope'];
function UsersIndexCtrl(User) {
  const vm = this;
  vm.users = User.query();
}
