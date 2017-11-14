angular
  .module('gaFeedback')
  .controller('CohortsShowCtrl', CohortsShowCtrl);

CohortsShowCtrl.$inject = ['Cohort', '$stateParams'];

function CohortsShowCtrl(Cohort, $stateParams) {
  const vm = this;
  vm.cohort = Cohort.get($stateParams);
}
