angular
  .module('gaFeedback')
  .controller('CohortsIndexCtrl', CohortsIndexCtrl);

CohortsIndexCtrl.$inject = ['Cohort'];
function CohortsIndexCtrl(Cohort) {
  const vm = this;
  vm.cohorts = Cohort.query();
}
