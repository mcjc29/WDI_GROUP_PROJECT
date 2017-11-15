angular
  .module('gaFeedback')
  .controller('LessonsShowCtrl', LessonsShowCtrl);

LessonsShowCtrl.$inject = ['Lesson', '$stateParams', 'Rating'];

function LessonsShowCtrl(Lesson, $stateParams, Rating) {
  const vm = this;
  vm.lesson = Lesson.get($stateParams);

  vm.avgPace;
  vm.avgConcepts;
  vm.avgSyntax;
  vm.avgConfidence;

  Rating
    .query()
    .$promise
    .then(data => {
      vm.ratings = data;

      const lessonData = [];
      data.filter(rating => {
        if ((rating.createdAt >= vm.lesson.startTime && rating.createdAt <= vm.lesson.endTime)) {
          lessonData.push(rating);
        }
      });

      vm.lessonData = lessonData;

      const paceValues = [];
      lessonData.filter(rating => paceValues.push(rating.pace));
      vm.avgPace = Math.ceil((paceValues.reduce((a,b) => a + b)) / paceValues.length);

      const conceptsValues = [];
      lessonData.filter(rating => conceptsValues.push(rating.concepts));
      vm.avgConcepts = Math.ceil((conceptsValues.reduce((a,b) => a + b)) / conceptsValues.length);

      const syntaxValues = [];
      lessonData.filter(rating => syntaxValues.push(rating.syntax));
      vm.avgSyntax = Math.ceil((syntaxValues.reduce((a,b) => a + b)) / syntaxValues.length);

      const confidenceValues = [];
      lessonData.filter(rating => confidenceValues.push(rating.confidence));
      vm.avgConfidence = Math.ceil((confidenceValues.reduce((a,b) => a + b)) / confidenceValues.length);

      vm.labels = ['Pace of Lesson', 'Concepts', 'Syntax', 'Confidence'];

      vm.data = [vm.avgPace, vm.avgConcepts, vm.avgSyntax, vm.avgConfidence];

      vm.chartOptions = {
        title: {
          display: true,
          text: 'Lesson Snapshot'
        },
        scale: {
          ticks: {min: 0, max: 100}
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      };

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
