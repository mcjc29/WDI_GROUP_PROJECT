angular
  .module('gaFeedback')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/js/views/registrations/login.html',
      controller: 'LoginCtrl as vm'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/views/registrations/register.html',
      controller: 'RegisterCtrl as vm'
    });
  $urlRouterProvider.otherwise('/');
}
