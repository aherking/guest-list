'use strict';

//Guest directive
angular.module('listApp')
.directive('guest', function(){
  return {
    templateUrl: 'templates/guest.html',
    replace: true,
    controller: 'guestCtrl'
  }
});
