angular
  .module('gaFeedback')
  .controller('ModalLoginController', ModalLoginController);

ModalLoginController.$inject = ['bulmaModal', '$state'];

/**
 * @param {BulmaModal} bulmaModal
 */
function ModalLoginController(bulmaModal, $state) {
  var vm   = this;
  vm.close = close;

  function close() {
    bulmaModal.destroy();
    $state.go('home');
  }

}
