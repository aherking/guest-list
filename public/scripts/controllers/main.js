'use strict';

//mainCtrl
angular.module('listApp')
.controller('mainCtrl', function($scope, dataService){

// gets guests and attaches list to scopes guests variable
  dataService.getGuests(function(response){
    let guests = response.data.guests;//add guest
    $scope.guests =  guests;
    });
// Create new guest and add it to guest list
  $scope.addGuest = function() {
    $scope.guests.unshift({name: "Who would you like to invite?",
                      rsvpd: false});
  };

})
