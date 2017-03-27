'use strict';

const angular = require('angular');

angular.module('guestListApp')
.service('dataService', function($http, $q) {//$q helps manage requests by resolving all promises before returning results
  //GET GUEST DATA
  this.getGuests = function(cb) {
    //Route set in src/index.js, $http is angular service to communicate with API
    $http.get('/api/guests').then(cb);
  };
  
  //DELETE GUEST FROM LIST
  this.deleteGuest = function(guest) {
    console.log("Deleted " + guest.name);
  };

  //SAVE GUEST DATA (POST/PUT)
  this.saveGuests = function(guests) {
    let queue = [];//Empty array to store Guest Data in...
    //Loop thru each guest--for each guest, push a request to the 'queue'
    guests.forEach(function(guest) {
      let request;
      //if guest does not have id...
      if (!guest._id) {
        request = $http.post('/api/guests', guest);
      } else {
        request = $http.put('/api/guests/' + guest._id , guest).then(function(result){
          let guest = result.data.guest;
          return guest;
        });
      };
      //Push a request to the 'queue'
      queue.push(request);
    });
    
      return $q.all(queue).then(function(results) {
      console.log("Guest total: " + guests.length);
    });
  };

});//End dataService
