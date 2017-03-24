//Application Coonection to database

'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project', function(err){
  //callback for connection
  if(err) {
    console.log('Failed connecting to Mongodb!');
  } else {
    console.log('Success! Connected to Mongodb!');
  }  
});
