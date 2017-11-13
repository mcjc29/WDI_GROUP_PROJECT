angular
  .module('gaFeedback')
  .controller('RatingsCtrl', RatingsCtrl);

RatingsCtrl.$inject = ['Rating', '$state'];

function RatingsCtrl(Rating, $state) {
  const vm = this;
<<<<<<< HEAD:src/js/controllers/knob/knob.controller.js
  vm.value = 50;
  console.log(vm.value);
=======
  vm.submit = addRating;

  function addRating() {
    vm.newRating = {
      pace: vm.pace,
      concepts: vm.concepts,
      syntax: vm.syntax,
      confidence: vm.confidence
    };
    Rating
      .save(vm.newRating)
      .$promise
      .then(() => {
        $state.go('lessonsIndex');
      });
  }

>>>>>>> 8a9393222317403ac6360df60cab3e17155526ca:src/js/controllers/ratings/rating.controller.js
  vm.options1 = {
    min: -100,
    max: 100,
    barColor: '#5BC01E',
    trackColor: '#212121',
    trackWidth: 15,
    barWidth: 30
  };

  vm.options2 = {
    min: -100,
    max: 100,
    bgColor: '#2C3E50',
    trackWidth: 50,
    barWidth: 30,
    barColor: '#FFAE1A',
    textColor: '#eee'
  };

  vm.options3 = {
    unit: '%',
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
