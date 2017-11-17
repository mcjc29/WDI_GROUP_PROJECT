angular.module('gaFeedback').config(Router);

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
      controller: 'UsersIndexCtrl as vm',
      resolve: {
        redirectIfNotAuthenticated
      }
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: '/js/views/users/form.html',
      controller: 'UsersEditCtrl as vm',
      resolve: {
        redirectIfNotAuthenticated
      }
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: '/js/views/users/show.html',
      controller: 'UsersShowCtrl as vm',
      resolve: {
        redirectIfNotAuthenticated
      }
    })
    .state('lessonsIndex', {
      url: '/lessons',
      templateUrl: '/js/views/lessons/index.html',
      controller: 'LessonsIndexCtrl as vm',
      resolve: {
        redirectIfNotAuthenticated
      }
    })
    .state('lessonsNew', {
      url: '/lessons/new',
      templateUrl: '/js/views/lessons/form.html',
      controller: 'LessonsNewCtrl as vm',
      resolve: {
        redirectIfNotAuthenticated
      }
    })
    .state('lessonsEdit', {
      url: '/lessons/:id/edit',
      templateUrl: '/js/views/lessons/form.html',
      controller: 'LessonsEditCtrl as vm',
      resolve: {
        redirectIfNotAuthenticated
      }
    })
    .state('lessonsShow', {
      url: '/lessons/:id',
      templateUrl: '/js/views/lessons/show.html',
      controller: 'LessonsShowCtrl as vm',
      resolve: {
        redirectIfNotAuthenticated
      }
    })
    .state('cohortsIndex', {
      url: '/cohorts',
      templateUrl: '/js/views/cohorts/index.html',
      controller: 'CohortsIndexCtrl as vm',
      resolve: {
        redirectIfNotAuthenticated
      }
    })
    .state('cohortsEdit', {
      url: '/cohorts/:id/edit',
      templateUrl: '/js/views/cohorts/form.html',
      controller: 'CohortsEditCtrl as vm',
      resolve: {
        redirectIfNotAuthenticated
      }
    })
    .state('cohortsShow', {
      url: '/cohorts/:id',
      templateUrl: '/js/views/cohorts/show.html',
      controller: 'CohortsShowCtrl as vm',
      resolve: {
        redirectIfNotAuthenticated
      }
    })
    .state('commentIndex', {
      url: '/chat',
      templateUrl: '/js/views/chat/chat.html',
      controller: 'ChatCtrl as vm',
      resolve: {
        redirectIfNotAuthenticated
      }
    })
    .state('ratingsIndex', {
      url: '/ratings',
      templateUrl: '/js/views/ratings/index.html',
      controller: 'RatingsCtrl as vm',
      resolve: {
        redirectIfNotAuthenticated
      }
    });
  $urlRouterProvider.otherwise('/');

  redirectIfNotAuthenticated.$inject = [
    '$q',
    '$state',
    '$auth',
    '$timeout',
    '$rootScope'
  ];
  function redirectIfNotAuthenticated($q, $state, $auth, $timeout, $rootScope) {
    var defer = $q.defer();
    if ($auth.getPayload()) {
      defer.resolve();
    } else {
      $rootScope.$broadcast('displayMessage', {
        type: 'warning',
        content: 'You must be logged in.'
      });
      $timeout(() => {
        $state.go('login');
      });
    }
    return defer.promise;
  }
}
