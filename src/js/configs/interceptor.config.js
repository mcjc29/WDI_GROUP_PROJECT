angular
  .module('gaFeedback')
  .config(Interceptor);

Interceptor.$inject = ['$httpProvider'];
function Interceptor($httpProvider) {
  $httpProvider.interceptors.push(function() {
    return {
      request: function (config) {
        if (config.url.startsWith('http://bucketurl.com')) {
          delete config.headers.Authorization;
        }
        return config;
      }
    };
  });
}
