angular
  .module('gaFeedback')
  .controller('GroupsIndexCtrl', GroupsIndexCtrl);

GroupsIndexCtrl.$inject = ['Group'];
function GroupsIndexCtrl(Group) {
  const vm = this;
  vm.groups = Group.query();
}