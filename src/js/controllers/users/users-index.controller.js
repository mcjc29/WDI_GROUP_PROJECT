angular.module('gaFeedback').controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User', '$scope'];
function UsersIndexCtrl(User) {
  const vm = this;
  User.query().$promise.then(people => {
    vm.teachers = [];
    vm.students = [];
    for (var i = 0; i < people.length; i++) {
      const person = people[i];
      if (person.role === 'student') {
        vm.students.push(person);
      } else {
        vm.teachers.push(person);
      }
    }
  });
}
