angular
  .module('gaFeedback')
  .controller('LessonsIndexCtrl', LessonsIndexCtrl);

LessonsIndexCtrl.$inject = ['Lesson', 'filterFilter', '$scope'];
function LessonsIndexCtrl(Lesson, filterFilter, $scope) {
  const vm = this;
  vm.lessons = Lesson.query();

  function filterLesson() {
    const params = { title: vm.q };

    vm.filtered = filterFilter(vm.lessons, params);
  }

  $scope.$watchGroup([
    () => vm.q
  ], filterLesson);

  vm.filterLesson = filterLesson;
}
