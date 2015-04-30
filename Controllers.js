




"use strict";
(function()
{
  
 angular.module('plunker').controller('HomeCtrl', HomeController);
 angular.module('plunker').controller('LoginCtrl', LoginController);
 angular.module('plunker').controller('ProfileCtrl', ProfileController);

function LoginController($location) {
    var lctrl = this;

    lctrl.goToHome = function() {

      var queryStr = {
        firstName: 'megha',
        lastName: 'gupta',
        address: 'hearttt'
      };

      $location.path('/profile').search(queryStr);
    };
  }


  
  function HomeController ($routeParams) {
    var hctrl = this;
    
    hctrl.params = $routeParams;
    console.log('home controller');
  }
  
 function ProfileController($routeParams, $http, PeopleData, PeoplePhotoData) {
    var pctrl = this;
    console.log('Profile controller');
    
    pctrl.user = PeopleData.data;
    pctrl.user.imgUrl = PeoplePhotoData.data.url;
    console.log('user');
  }
})();