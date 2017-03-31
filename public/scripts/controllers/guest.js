'use strict';
//guestCtrl that deltes and saves guests
angular.module('guestListApp')
.controller('guestCtrl', function($scope, dataService) {
  //DELETE
    $scope.deleteGuest = function(guest, $index) {
      dataService.deleteGuest(guest);
      $scope.guests.splice($index, 1);
    };
  //Save List (saveGuest ctrl)
    $scope.saveGuests = function() {
      let filteredGuests = $scope.guests.filter(function(guest){
        if(guest.edited) {
          return guest;
        };
      })
      dataService.saveGuests(filteredGuests);//returns a promise , then resets
    };

    $scope.resetGuestState = function() {
      $scope.guests.forEach(function(guest){
        guest.rsvpd = false;
      });
    };
});


 
