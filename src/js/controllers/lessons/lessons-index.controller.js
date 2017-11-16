angular.module('gaFeedback').controller('LessonsIndexCtrl', LessonsIndexCtrl);

LessonsIndexCtrl.$inject = ['Lesson', 'filterFilter', '$scope', '$moment'];
function LessonsIndexCtrl(Lesson, filterFilter, $scope, $moment) {
  const vm = this;

  Lesson.query().$promise.then(lessons => {
    vm.lessons = lessons;
    vm.lessons.forEach(lesson => {
      lesson.createdAt = $moment(lesson.createdAt).format('Do MMMM YYYY');
    });
    filterLesson();
  });

  function filterLesson() {
    const params = { title: vm.q };

    vm.filtered = filterFilter(vm.lessons, params);
  }

  $scope.$watchGroup([() => vm.q], filterLesson);

  vm.filterLesson = filterLesson;
}
