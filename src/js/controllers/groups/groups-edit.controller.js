angular
  .module('gaFeedback')
  .controller('GroupsEditCtrl', GroupsEditCtrl);

GroupsEditCtrl.$inject = ['Group', '$stateParams', '$state'];

function GroupsEditCtrl(Group, $stateParams, $state) {
  const vm = this;

  vm.group = Group.get($stateParams);
  vm.submit = group => {
    Group
      .update({ id: group.id }, group)
      .$promise
      .then(group => {
        $state.go('groupsShow', { id: group.id });
      });
  };
}
