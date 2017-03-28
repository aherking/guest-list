//public/scripts/services/index.js
'use strict';
const angular = require('angular');

//Add dataService to app
angular.module('guestListApp').service('dataService', require('./data'));
