'use strict';

angular.module('envosMarketingApp', ['ngRoute', 'ngAnimate'])
  .controller('envosMarketingAppCtrl', function($rootScope) {
    $rootScope.topScope = $rootScope;
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
