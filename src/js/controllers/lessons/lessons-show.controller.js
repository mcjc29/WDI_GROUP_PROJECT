angular
  .module('gaFeedback')
  .controller('LessonsShowCtrl', LessonsShowCtrl);

LessonsShowCtrl.$inject = ['Lesson', '$stateParams'];

function LessonsShowCtrl(Lesson, $stateParams) {
  const vm = this;
  vm.lessons = Lesson.get($stateParams);
}
