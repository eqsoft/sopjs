'use strict';

var somApp = angular.module('som', [
  'somView',
  'somController'
]);

somApp.value('showOnline',true);
