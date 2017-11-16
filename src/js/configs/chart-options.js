angular.module('gaFeedback').config(ChartJsProvider);

ChartJsProvider.$inject = ['ChartJsProvider'];
function ChartJsProvider(ChartJsProvider) {
  ChartJsProvider.setOptions({
    chartColors: ['#2CC185']
  });
}
