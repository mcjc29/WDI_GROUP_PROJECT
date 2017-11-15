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
      startTime: vm.startTime,
      endTime: vm.endTime,
      creator: vm.creator,
      city: vm.city,
      competencies: vm.competencies,
      taughtBy: vm.taughtBy
    };
    console.log(vm.startTime);

    Lesson
      .save(vm.newLesson)
      .$promise
      .then(() => {
        $state.go('lessonsIndex');
      });
  }
}
