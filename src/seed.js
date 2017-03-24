//Seed data for database

'use strict';

//Import Guest Model
const Guest = require('./models/guest.js');

let guests =
[
  {"name" : "Franny Fingerbottom",
    "rsvpd" : true},
  {"name" : "Josh Jamboree",
    "rsvpd" : true},
  {"name" : "Yuk Yakenmore",
    "rsvpd" : true},
  {"name" : "Curtis Nickels",
    "rsvpd" : false},
  {"name" : "Jack Jackson",
    "rsvpd" : true},
  {"name": "Rebecca Pawel",
    "rsvpd" : true},
  {"name": "Francine Featherbottom",
    "rsvpd" : false},
  {"name": "Pepper Ann",
    "rsvpd" : true},
  {"name": "Curtis Nickels",
    "rsvpd" : true},
  {"name": "Jimmy Dohickey",
    "rsvpd" : false},
  {"name": "Ralph Alot",
    "rsvpd" : true}
];
//iterate through array
guests.forEach(function(guest, index) {
  //Look for guest with where name = string
  Guest.find({'name': guest}, function(err, guests) {
    //no err & no guests, then create
    if(!err && !guests.length) {
      guest.create({rsvpd: false, name: guest}); //rsvp: false
    }
  });
});
