angular
  .module('gaFeedback')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User', '$scope'];
function UsersIndexCtrl(User) {
  const vm = this;
  vm.user = User.query();

}
