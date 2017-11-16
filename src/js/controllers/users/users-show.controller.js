angular.module('gaFeedback').controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', 'Rating', '$moment'];

function UsersShowCtrl(User, $stateParams, Rating, $moment) {
  const vm = this;
  vm.user = User.get($stateParams);
  vm.rating = null;

  User.get($stateParams).$promise.then(user => {
    vm.user = user;
    Rating.query().$promise.then(data => {
      vm.ratings = data;

      const userData = [];
      data.filter(rating => {
        if (rating.createdBy.id === user._id) {
          userData.push(rating);
        }
      });

      const paceValues = [];
      userData.filter(rating => paceValues.push(rating.pace));
      vm.avgPace = Math.ceil(
        paceValues.reduce((a, b) => a + b) / paceValues.length
      );

      const conceptsValues = [];
      userData.filter(rating => conceptsValues.push(rating.concepts));
      vm.avgConcepts = Math.ceil(
        conceptsValues.reduce((a, b) => a + b) / conceptsValues.length
      );

      const syntaxValues = [];
      userData.filter(rating => syntaxValues.push(rating.syntax));
      vm.avgSyntax = Math.ceil(
        syntaxValues.reduce((a, b) => a + b) / syntaxValues.length
      );

      const confidenceValues = [];
      userData.filter(rating => confidenceValues.push(rating.confidence));
      vm.avgConfidence = Math.ceil(
        confidenceValues.reduce((a, b) => a + b) / confidenceValues.length
      );

      const ratingDates = [];
      userData.filter(rating =>
        ratingDates.push($moment(rating.createdAt).fromNow())
      );

      vm.labels = ratingDates;
      vm.data = confidenceValues;
      vm.chartOptions = {
        title: {
          display: true,
          text: 'Confidence Level Over Time',
          fontSize: 24,
          fontFamily: 'Arial'
        },
        scales: {
          yAxes: [
            {
              id: 'y-axis-1',
              ticks: { min: 0, max: 100 },
              type: 'linear',
              display: true,
              position: 'left',
              scaleLabel: {
                display: true,
                labelString: 'Confidence'
              }
            }
          ]
        }
      };
    });
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
