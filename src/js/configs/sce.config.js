angular
  .module('gaFeedback')
  .config(SCE);

SCE.$inject = ['$sceProvider'];
function SCE($sceProvider) {
  $sceProvider.enabled(false);
}
