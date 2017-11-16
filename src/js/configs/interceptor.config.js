angular
  .module('gaFeedback')
  .config(Interceptor);

Interceptor.$inject = ['$httpProvider'];
function Interceptor($httpProvider) {
  $httpProvider.interceptors.push(function() {
    return {
      request: function (config) {
        if (config.url.startsWith('https://ga-feedback-george.s3.eu-west-2.amazonaws.com/')) {
          delete config.headers.Authorization;
        }
        return config;
      }
    };
  });
}
