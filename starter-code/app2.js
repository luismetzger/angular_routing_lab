angular.module('myApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main.html'
      })
      .when('/red', {
        templateUrl: 'templates/red.html'
      })
      .when('/green', {
        templateUrl: 'templates/green.html'
      })
      .when('/blue', {
        templateUrl: 'templates/blue.html'
      })
  });
