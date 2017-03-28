'use strict';

//mainCtrl
function MainCtrl ($scope, dataService) {
// gets guests and attaches list to scope.guests variable
  dataService.getGuests(function(response){
    let guests = response.data.guests;
    $scope.guests =  guests;
    });
// Create new guest and adds it to guest list using unshift
  $scope.addGuest = function() {
    $scope.guests.unshift({name: "Who would you like to invite?",
                      rsvpd: false});
  };
}

module.exports = MainCtrl;
