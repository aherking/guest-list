'use strict';

angular.module('guestListApp')
.controller('mainCtrl', function($scope, dataService) {
  //ADD new guest data
  $scope.addGuest = function() {
    let guest = {name: "New Guest", rsvpd: false};
    $scope.guests.unshift(guest);
  };
//GET guest data and attaches it to list
dataService.getGuests(function(response) {
  console.log(response.data);
  let guests = response.data.guests;
  $scope.guests =  guests;
});
});
