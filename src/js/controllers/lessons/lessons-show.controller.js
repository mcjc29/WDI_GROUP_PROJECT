angular
  .module('gaFeedback')
  .controller('LessonsShowCtrl', LessonsShowCtrl);

LessonsShowCtrl.$inject = ['Lesson', '$stateParams', 'Rating', '$moment'];

function LessonsShowCtrl(Lesson, $stateParams, Rating, $moment) {
  const vm = this;

  Lesson
    .get({ id: $stateParams.id })
    .$promise
    .then(lesson => {
      vm.lesson = lesson;
      vm.lesson.createdAt = $moment(vm.lesson.createdAt).format('Do MMMM YYYY');
    });

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

      vm.labels = ['Confidence', 'Concepts', 'Syntax', 'Pace'];

      vm.data = [vm.avgConfidence, vm.avgConcepts, vm.avgSyntax, vm.avgPace];

      vm.chartOptions = {
        title: {
          display: true,
          text: 'Lesson Snapshot',
          fontSize: 24
        },
        scale: {
          ticks: {
            min: 0,
            max: 100,
            labels: {
              display: false
            }
          },
          pointLabels: {
            display: true,
            fontSize: 20
          }
        },
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20
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

  vm.returnLessonNotes = (url) => {
    return url;
  };

}
