'use strict';

angular.module('listApp')
.service('dataService', function($http) {
  this.getGuests = function(cb) {
    //Route set in Express App (src/index.js) $http is angular service to communicate with API
    $http.get('/api/guests').then(cb);
  };

  this.deleteGuest = function(Guest) {
    console.log("I deleted the " + guest.name + " todo!");
  };

  this.saveGuests = function(guests) {
    console.log("Guest total: " + guests.length);
  };

});
