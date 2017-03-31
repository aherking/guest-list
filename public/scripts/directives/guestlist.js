'use strict';

angular.module('guestListApp')
.directive('guestlist', function() {
return {
  templateURL: 'templates/guestlist.html',
  controller:'mainCtrl',
  replace: true
}

});

