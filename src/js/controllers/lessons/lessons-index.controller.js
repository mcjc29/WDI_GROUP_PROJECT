angular
  .module('gaFeedback')
  .controller('LessonsIndexCtrl', LessonsIndexCtrl);

LessonsIndexCtrl.$inject = ['Lesson', 'filterFilter', '$scope'];
function LessonsIndexCtrl(Lesson, filterFilter, $scope) {
  const vm = this;

  Lesson
    .query()
    .$promise
    .then(lessons => {
      vm.lessons = lessons;
      filterLesson();
    });

  function filterLesson() {
    const params = { title: vm.q };

    vm.filtered = filterFilter(vm.lessons, params);
    console.log(vm.q);
  }

  $scope.$watchGroup([
    () => vm.q
  ], filterLesson);

  vm.filterLesson = filterLesson;
}
