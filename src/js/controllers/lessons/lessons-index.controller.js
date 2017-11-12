angular
  .module('gaFeedback')
  .controller('LessonsIndexCtrl', LessonsIndexCtrl);

LessonsIndexCtrl.$inject = ['Lesson'];
function LessonsIndexCtrl(Lesson) {
  const vm = this;
  vm.lesson = Lesson.query();
}
