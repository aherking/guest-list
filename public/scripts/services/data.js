'use strict';

angular.module('guestListApp')
//------- ANGULAR MODE------- //
.service('dataService', function($http){

         this.helloWorld = function() {
          console.log("dataService Method");
};

this.getGuests = function(callback) {
  $http.get('mock/guests.json')
  .then(callback)
  }

this.deleteGuest = function(guest) {
  console.log(guest.name +" has been deleted");
  //other logic
};

this.saveGuests = function(guest) {
  console.log("Total guest count: " + guest.length );
};

});

//------- MONGO MODE------- //
// .service('dataService', function($http, $q){//$q helps manage requests by resolving all promises before returning results
// //GET
// this.getGuests =
//   $http.get('/api/guests')
//   //$http.get('mock/guests.json')//so it 100% works
//   .then(function(response){
//     console.log(response.data);
//     return response.data;
//   });
// };
//
// //DELETE
// this.deleteGuest = function(guest) {
//   if(!guest._id) {
//     return $q.resolve();
//   }
//     return $http.delete('api/guests' + guest._id).then(function(){
//     console.log(guest.name +" has been deleted");
//   });
// };
//
// //SAVE (post/put)
// this.saveGuests = function(guest) {
// let queue = [];
// //Loop thru each guest--for each guest, push a req to the queue
// guests.forEach(function(guest) {
//   let request;
//   //if guest does not have id...
//   if(!guest._id) {
//     request = $http.post('/api/guests', guest);
//   } else {
//     request = $http.put('/api/guests/' + guest._id, guest).then(function(result){
//       let guest = result.data.guest;
//       return guest;
//     });
//   };
//   queue.push(request);
// });
// return $q.all(queue).then(function(results){
//   console.log("Total guests saved: " + guest.length );
// });
// }
// });
