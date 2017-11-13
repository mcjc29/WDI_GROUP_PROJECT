angular
  .module('gaFeedback')
  .controller('LessonsShowCtrl', LessonsShowCtrl);

LessonsShowCtrl.$inject = ['Lesson', '$stateParams', 'Rating'];

function LessonsShowCtrl(Lesson, $stateParams, Rating ) {
  const vm = this;
  vm.lessons = Lesson.get($stateParams);
  vm.rating = null;

  Rating
    .query()
    .$promise
    .then(data => {
      vm.ratings = data;
      vm.pace = vm.ratings[0];
      console.log(vm.pace);
      // vm.concepts = vm.ratings[1];
    });

  vm.options1 = {
    readOnly: true,
    min: -100,
    max: 100,
    barColor: '#5BC01E',
    trackColor: '#212121',
    trackWidth: 15,
    barWidth: 30
  };

  vm.options2 = {
    min: -100,
    readOnly: true,
    max: 100,
    bgColor: '#2C3E50',
    trackWidth: 50,
    barWidth: 30,
    barColor: '#FFAE1A',
    textColor: '#eee'
  };

  vm.options3 = {
    unit: '%',
    readOnly: true,
    subText: {
      enabled: true,
      text: 'Pace',
      color: 'gray',
      font: 'arial'
    },
    trackWidth: 40,
    barWidth: 25,
    trackColor: '#656D7F',
    barColor: '#2CC185'
  };
}
