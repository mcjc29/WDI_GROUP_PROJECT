angular
  .module('gaFeedback')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
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
    })
    .state('usersIndex', {
      url: '/users',
      templateUrl: '/js/views/users/index.html',
      controller: 'UsersIndexCtrl as vm'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: '/js/views/users/form.html',
      controller: 'UsersEditCtrl as vm'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: '/js/views/users/show.html',
      controller: 'UsersShowCtrl as vm'
    })
    .state('lessonsIndex', {
      url: '/lessons',
      templateUrl: '/js/views/lessons/index.html',
      controller: 'LessonsIndexCtrl as vm'
    })
    .state('lessonsEdit', {
      url: '/lessons/:id/edit',
      templateUrl: '/js/views/lessons/form.html',
      controller: 'LessonsEditCtrl as vm'
    })
    .state('lessonsShow', {
      url: '/lessons/:id',
      templateUrl: '/js/views/lessons/show.html',
      controller: 'LessonsShowCtrl as vm'
    })
    .state('cohortsIndex', {
      url: '/cohorts',
      templateUrl: '/js/views/cohorts/index.html',
      controller: 'CohortsIndexCtrl as vm'
    })
    .state('cohortsEdit', {
      url: '/cohorts/:id/edit',
      templateUrl: '/js/views/cohorts/form.html',
      controller: 'CohortsEditCtrl as vm'
    })
    .state('cohortsShow', {
      url: '/cohorts/:id',
      templateUrl: '/js/views/cohorts/show.html',
      controller: 'CohortsShowCtrl as vm'
    })
    .state('commentIndex', {
      url: '/chat',
      templateUrl: '/js/views/chat/chat.html',
      controller: 'ChatCtrl as vm'
    });
  $urlRouterProvider.otherwise('/');
}
