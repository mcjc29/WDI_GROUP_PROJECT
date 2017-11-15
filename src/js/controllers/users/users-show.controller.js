angular
  .module('gaFeedback')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', 'Rating', '$scope', '$moment'];

function UsersShowCtrl(User, $stateParams, Rating, $scope, $moment) {
  const vm = this;
  vm.user = User.get($stateParams);
  vm.rating = null;
  vm.options;

  Rating
    .query()
    .$promise
    .then(data => {
      vm.ratings = data;

      const userData = [];
      data.filter(rating => {
        if (rating.createdBy.id === vm.user._id) {
          userData.push(rating);
        }
      });

      const paceValues = [];
      userData.filter(rating => paceValues.push(rating.pace));
      vm.avgPace = Math.ceil((paceValues.reduce((a,b) => a + b)) / paceValues.length);

      const conceptsValues = [];
      userData.filter(rating => conceptsValues.push(rating.concepts));
      vm.avgConcepts = Math.ceil((conceptsValues.reduce((a,b) => a + b)) / conceptsValues.length);

      const syntaxValues = [];
      userData.filter(rating => syntaxValues.push(rating.syntax));
      vm.avgSyntax = Math.ceil((syntaxValues.reduce((a,b) => a + b)) / syntaxValues.length);

      const confidenceValues = [];
      userData.filter(rating => confidenceValues.push(rating.confidence));
      vm.avgConfidence = Math.ceil((confidenceValues.reduce((a,b) => a + b)) / confidenceValues.length);

      const ratingDates = [];
      userData.filter(rating => ratingDates.push($moment(rating.createdAt).fromNow()));

      $scope.labels = ratingDates;
      $scope.data = confidenceValues;
      $scope.options = {
        title: {
          display: true,
          text: 'Confidence Level Over Time'
        },
        scales: {
          yAxes: [
            {
              id: 'y-axis-1',
              ticks: {min: 0, max: 100},
              type: 'linear',
              display: true,
              position: 'left',
              scaleLabel: {
                display: true,
                labelString: 'Confidence',
                fontFamily: 'Arial'
              }
            }
          ]
        }
      };
      console.log($scope.options);
    });

  vm.options = {
    animate: false,
    min: 0,
    max: 100,
    bgColor: '#4a4a4a',
    trackWidth: 50,
    barWidth: 30,
    barColor: '#2CC185',
    textColor: '#eee',
    readOnly: true
  };


}
