angular
  .module('gaFeedback')
  .controller('LessonsNewCtrl', LessonsNewCtrl);

LessonsNewCtrl.$inject = ['Lesson', '$state'];

function LessonsNewCtrl(Lesson, $state) {
  const vm = this;

  vm.submit = addLesson;

  function addLesson() {
    vm.newLesson = {
      title: vm.lesson.title,
      startTime: vm.lesson.startTime,
      endTime: vm.lesson.endTime,
      creator: vm.lesson.creator,
      city: vm.lesson.city,
      competencies: vm.lesson.competencies,
      taughtBy: vm.lesson.taughtBy,
      base64: vm.lesson.base64
    };

    Lesson
      .save(vm.newLesson)
      .$promise
      .then(() => {
        $state.go('lessonsIndex');
      });
  }
}
