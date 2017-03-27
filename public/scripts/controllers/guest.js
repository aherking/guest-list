'use strict';
const angular = require('angular');
//guestCtrl that deletes and saves

angular.module('guestListApp')
.controller('guestCtrl', function($scope, dataService) {
  $scope.deleteGuest = function(guest, index) {
    $scope.guests.splice(index, 1);
    dataService.deleteGuest(guest);
  };

  $scope.saveGuests = function() {
    var filteredGuests = $scope.guests.filter(function(guest){
      if(guest.edited) {
        return guest
      };
    })
    dataService.saveGuests(filteredGuests)//returns a promise, then resets
    .finally($scope.resetGuestState());
  };
  //Reset Guest List state to false
  $scope.resetGuestState = function() {
    $scope.guests.forEach(function(guest) {
      guest.edited = false;
    });
  };

});
