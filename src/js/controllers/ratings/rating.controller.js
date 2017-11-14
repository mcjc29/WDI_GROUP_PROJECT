angular
  .module('gaFeedback')
  .controller('RatingsCtrl', RatingsCtrl);

RatingsCtrl.$inject = ['Rating', '$state'];

function RatingsCtrl(Rating, $state) {
  const vm = this;
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

  vm.options1 = {
    min: 0,
    max: 100,
    barColor: '#5BC01E',
    trackColor: '#212121',
    trackWidth: 15,
    barWidth: 30
  };

  vm.options2 = {
    min: 0,
    max: 100,
    bgColor: '#4a4a4a',
    trackWidth: 50,
    barWidth: 30,
    barColor: '#2CC185',
    textColor: '#eee'
  };

  vm.options3 = {
    min: 0,
    max: 100,
    unit: '%',
    subText: {
      enabled: true,
      text: 'Pace',
      color: 'gray',
      font: 'arial'
    },
    trackWidth: 40,
    barWidth: 25,
    trackColor: '#4a4a4a',
    barColor: '#2CC185'
  };

  vm.options4 = {
    skin: {
      type: 'tron',
      width: 5,
      space: 1
    },
    min: 0,
    max: 100,
    trackWidth: 40,
    barWidth: 25,
    barCap: 50,
    barColor: '#fa4542',
    textColor: 'black'
  };

}
