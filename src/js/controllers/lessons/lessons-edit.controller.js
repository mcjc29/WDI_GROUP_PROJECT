angular
  .module('gaFeedback')
  .controller('LessonsEditCtrl', LessonsEditCtrl);

LessonsEditCtrl.$inject = ['Lesson', '$stateParams', '$state'];

function LessonsEditCtrl(Lesson, $stateParams, $state) {
  const vm = this;

  vm.lesson = Lesson.get($stateParams);
  vm.submit = lesson => {
    Lesson
      .update({ id: lesson._id }, lesson)
      .$promise
      .then(lesson => {
        $state.go('lessonsShow', { id: lesson._id });
      });
  };
}
