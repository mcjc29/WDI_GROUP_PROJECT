angular
  .module('gaFeedback')
  .config(ChartJsProvider);

function ChartJsProvider(ChartJsProvider) {
  ChartJsProvider
    .setOptions('radar', {
      chartColors: ['#803690']
    });
}
