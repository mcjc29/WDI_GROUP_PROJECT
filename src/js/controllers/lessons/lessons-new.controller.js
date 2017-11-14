angular
  .module('gaFeedback')
  .controller('LessonsNewCtrl', LessonsNewCtrl);

LessonsNewCtrl.$inject = ['Lesson', '$state'];

function LessonsNewCtrl(Lesson, $state) {
  const vm = this;

  vm.submit = addLesson;

  function addLesson() {
    vm.newLesson = {
      title: vm.title,
      stateTime: vm.startTime,
      endTime: vm.endTime,
      creator: vm.creator,
      city: vm.city,
      competencies: vm.competencies,
      taughtBy: vm.taughtBy
    };

    Lesson
      .save(vm.newLesson)
      .$promise
      .then(() => {
        $state.go('lessonsIndex');
      });
  }
}
