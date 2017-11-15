angular
  .module('gaFeedback')
  .controller('RatingsCtrl', RatingsCtrl);

RatingsCtrl.$inject = ['Rating', '$state', 'User', 'currentUserService', '$rootScope'];

function RatingsCtrl(Rating, $state, User, currentUserService, $rootScope) {
  const vm = this;
  vm.submit = addRating;
  vm.needHelp = false;

  $rootScope.$on('user defined', (event, data) => {
    vm.user = data.user;
  });

  function addRating() {
    vm.newRating = {
      pace: vm.pace,
      concepts: vm.concepts,
      syntax: vm.syntax,
      confidence: vm.confidence
    };
    console.log(user);
    Rating
      .save(vm.newRating)
      .$promise
      .then(rating => {
        console.log('rating ----->', rating);
        return User.update({ id: vm.user._id }, vm.user);
      })
      .then(user => {
        console.log('user ----->', user);
        $state.go('lessonsIndex');
      });
    vm.helpStatus = {
      needHelp: vm.needHelp
    };

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
