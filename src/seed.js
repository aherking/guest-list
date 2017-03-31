//Seed data for database, to get app started
'use strict';

//Import Guest Model
const Guest = require('./models/guest.js');

let guests =
[
  {"name" : "Bride's Parents",
    "rsvpd" : false},
  {"name" : "Groom's Parents",
    "rsvpd" : false},
  {"name" : "Brother/Sister",
    "rsvpd" : false},
  {"name" : "Best Friend",
    "rsvpd" : false}
];
//iterate through array
guests.forEach(function(guest, index) {
  //Look for guest with where name = string
  Guest.find({'name': guest}, function(error, guests) {
    //no err & no guests, then create
    if(!error && !guests.length) {
      guest.create({rsvpd: false, name: guest}); //rsvp: false
    };
  });
});
