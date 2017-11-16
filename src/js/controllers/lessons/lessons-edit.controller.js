angular.module('gaFeedback').controller('LessonsEditCtrl', LessonsEditCtrl);

LessonsEditCtrl.$inject = ['Lesson', '$stateParams', '$state'];

function LessonsEditCtrl(Lesson, $stateParams, $state) {
  const vm = this;

  vm.lesson = Lesson.get($stateParams);
  vm.submit = () => {
    Lesson.update({ id: $stateParams.id }, vm.lesson).$promise.then(() => {
      $state.go('lessonsShow', { id: $stateParams.id });
    });
  };
}
