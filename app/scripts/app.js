'use strict';

angular
  .module('gitNgfireyApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'BlogController'
      })
      .when('/newPost', {
        templateUrl: 'views/newPost.html',
        controller: 'BlogController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FIREBASE_URI', 'https://sheblogng.firebaseIO.com');



