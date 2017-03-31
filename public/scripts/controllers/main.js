'use strict';

angular.module('guestListApp')

//------- ANGULAR MODE------- //
.controller('mainCtrl', function($scope, dataService) {
  $scope.addGuest = function() {
    let guest = {name: "Who would you like to invite?", rsvpd: false};
    $scope.guests.unshift(guest);
  };


dataService.getGuests(function(response) {
  console.log(response.data);
  $scope.guests =  response.data;
});

  $scope.deleteGuest = function(guest, $index) {
    dataService.deleteGuest(guest);
    $scope.guests.splice($index, 1);
  };

  $scope.saveGuests = function() {
    let filteredGuests = $scope.guests.filter(function(guest){
      if(guest.edited) {
        return guest;
      };
    });
    dataService.saveGuests(filteredGuests);
  };
})


//------- MONGO MODE------- //
// .controller('mainCtrl', function($scope, dataService) {
//   //ADD new guest data
//   $scope.addGuest = function() {
//     let guest = {name: "New Guest", rsvpd: false};
//     $scope.guests.unshift(guest);
//   };
// //GET guest data and attaches it to list
// dataService.getGuests(function(response) {
//   console.log(response.data);
//   let guests = response.data.guests;
//   $scope.guests =  guests;
// });
// });
