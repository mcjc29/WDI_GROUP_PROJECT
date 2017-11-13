angular
  .module('gaFeedback')
  .controller('KnobCtrl', KnobCtrl);

KnobCtrl.$inject = [];

function KnobCtrl() {
  const vm = this;
  vm.value = 50;
  console.log(vm.value);
  vm.options1 = {
    min: -100,
    max: 100,
    barColor: '#5BC01E',
    trackColor: '#212121',
    trackWidth: 15,
    barWidth: 30
  };

  vm.options2 = {
    min: -100,
    max: 100,
    bgColor: '#2C3E50',
    trackWidth: 50,
    barWidth: 30,
    barColor: '#FFAE1A',
    textColor: '#eee'
  };

  vm.options3 = {
    unit: '%',
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
