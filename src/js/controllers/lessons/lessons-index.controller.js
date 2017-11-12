angular
  .module('gaFeedback')
  .controller('LessonsIndexCtrl', LessonsIndexCtrl);

LessonsIndexCtrl.$inject = ['Lesson'];
function LessonsIndexCtrl(Lesson) {
  const vm = this;
  vm.lessons = Lesson.query();
  console.log(vm.lessons);
}
