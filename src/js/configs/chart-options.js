angular
  .module('gaFeedback')
  .config(ChartJsProvider);

function ChartJsProvider(ChartJsProvider) {
  ChartJsProvider
    .setOptions({
      chartColors: ['#2CC185']
    });
}
