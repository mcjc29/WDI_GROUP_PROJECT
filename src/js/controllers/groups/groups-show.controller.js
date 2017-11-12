angular
  .module('gaFeedback')
  .controller('GroupsShowCtrl', GroupsShowCtrl);

GroupsShowCtrl.$inject = ['Group', '$stateParams'];

function GroupsShowCtrl(Group, $stateParams) {
  const vm = this;
  vm.groups = Group.get($stateParams);
}
