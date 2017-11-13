angular
  .module('gaFeedback')
  .controller('CohortsEditCtrl', CohortsEditCtrl);

CohortsEditCtrl.$inject = ['Cohort', '$stateParams', '$state'];

function CohortsEditCtrl(Cohort, $stateParams, $state) {
  const vm = this;

  vm.cohort = Cohort.get($stateParams);
  vm.submit = cohort => {
    Cohort
      .update({ id: cohort.id }, cohort)
      .$promise
      .then(cohort => {
        $state.go('cohortsShow', { id: cohort.id });
      });
  };
}
