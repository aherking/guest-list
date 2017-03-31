'use strict';

angular.module('guestListApp')
.service('dataService', function($http, $q){//$q helps manage requests by resolving all promises before returning results
//GET
this.getGuests = function(callback) {
  $http.get('/api/guests')
  .then(callback);
};
//DELETE
this.deleteGuest = function(guest) {
  if(!guest._id) {
    return $q.resolve();
  }
  return $http.delete('api/guests' + guest._id).then(function(){
    console.log(guest.name +" has been deleted");
  });
};
//SAVE (post/put)
this.saveGuests = function(guest) {
let queue = [];
//Loop thru each guest--for each guest, push a req to the queue
guests.forEach(function(guest) {
  let request;
  //if guest does not have id...
  if(!guest._id) {
    request = $http.post('/api/guests', guest);
  } else {
    request = $http.put('/api/guests/' + guest._id, guest).then(function(result){
      let guest = result.data.guest;
      return guest;
    })
  };
  queue.push(request);
});
return $q.all(queue).then(function(results){
  console.log("Total guests saved: " + guest.length );
});
};

});
