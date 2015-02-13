'use strict';

/**
 * @ngdoc overview
 * @name singlePageAppExerciseApp
 * @description
 * # singlePageAppExerciseApp
 *
 * Main module of the application.
 */
angular
  .module('singlePageAppExerciseApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
