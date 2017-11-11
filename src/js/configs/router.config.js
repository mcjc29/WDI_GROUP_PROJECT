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
      templateUrl: '/js/views/registrations/login.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/views/registrations/register.html'
    })
    .state('usersIndex', {
      url: '/users',
      templateUrl: '/js/views/users/index.html'
    });
  $urlRouterProvider.otherwise('/');
}
