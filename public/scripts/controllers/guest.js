'use strict';

//guestCtrl that deletes and saves
function GuestCtrl ($scope, dataService) {
  $scope.deleteGuest = function(guest, index) {
  dataService.deleteGuest(guest).then(function() {
    $scope.guests.splice(index, 1);
  });
};
//saveGuest ctrl
  $scope.saveGuests = function() {
    let filteredGuests = $scope.guests.filter(function(guest){
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
  }
}

module.exports = GuestCtrl;
