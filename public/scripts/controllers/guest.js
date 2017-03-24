'use strict';
//guestCtrl that deletes and saves
angular.module('listApp')
.controller('guestCtrl', function($scope, dataService) {
  $scope.deleteGuest = function(guest, index) {
    $scope.guests.splice(index, 1);
    dataService.deleteGuest(guest);
  };

  $scope.saveGuests = function() {
    let filteredGuests = $scope.guests.filter(function(guest){
      if(guest.edited) {
        return guest
      };
    })
    dataService.saveGuests(filteredGuests);
  };
});
