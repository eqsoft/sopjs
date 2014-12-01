'use strict';
var somView = angular.module('somView', ['ngRoute','somController'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/som', {
		templateUrl: 'components/som/somView.html',
		controller: 'somController'
	});
}]);
//somView.value('showOnline',true);
