(function() {

  angular.module('plunker', ['ngRoute']).config(moduleConfig);

  function moduleConfig($routeProvider) {
    $routeProvider
     
      .when('/login', {
        templateUrl: 'login.html',
        controller: 'LoginCtrl',
        controllerAs: 'lctrl'
      })
     
      .when('/home/:name/:city', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl',
        controllerAs: 'hctrl'
      })
     
     
      .when('/profile', {
        templateUrl: 'profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'pctrl',
        resolve: {
          PeopleData: loadUser,
          PeoplePhotoData: loadUserPic
        }
      })
      .otherwise({
        redirectTo: '/login'
      });


    function loadUser($http) {
      return $http({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/users/1'
      });
    }

    function loadUserPic($http) {
      return $http({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/photos/1'
      });
    }
  }


})();

