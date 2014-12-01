'use strict';

// Declare app level module which depends on views, and components
angular.module('sopjs', [
  'ngRoute',
  'som',
  'version',
  'appcache'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/som'});
}]);
