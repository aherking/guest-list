'use strict';

const angular = require('angular');
//on click event, replace <h1> with guest.html template

//Guest directive
angular.module('guestListApp')
.directive('guest', function(){
  return {
    templateUrl: 'templates/guest.html',
    replace: true,
    controller: 'guestCtrl'
  }
});
