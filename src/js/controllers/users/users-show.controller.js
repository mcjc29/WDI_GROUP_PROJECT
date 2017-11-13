angular
  .module('gaFeedback')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', 'Rating'];

function UsersShowCtrl(User, $stateParams, Rating) {
  const vm = this;
  vm.user = User.get($stateParams);

  vm.rating = null;

  Rating
    .query()
    .$promise
    .then(data => {
      vm.ratings = data;

      // const userRatings = data;
      // console.log('before filter', userRatings);
      // userRatings.filter(rating => {
      //   return rating.createdBy.id === $stateParams.id;
      // });
      // console.log('after filter', userRatings);

      const paceValues = [];
      data.filter(rating => paceValues.push(rating.pace));
      vm.avgPace = Math.ceil((paceValues.reduce((a,b) => a + b)) / paceValues.length);
      console.log(paceValues);

      const conceptsValues = [];
      data.filter(rating => conceptsValues.push(rating.concepts));
      vm.avgConcepts = Math.ceil((conceptsValues.reduce((a,b) => a + b)) / conceptsValues.length);

      const syntaxValues = [];
      data.filter(rating => syntaxValues.push(rating.syntax));
      vm.avgSyntax = Math.ceil((syntaxValues.reduce((a,b) => a + b)) / syntaxValues.length);

      const confidenceValues = [];
      data.filter(rating => confidenceValues.push(rating.confidence));
      vm.avgConfidence = Math.ceil((confidenceValues.reduce((a,b) => a + b)) / confidenceValues.length);

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
