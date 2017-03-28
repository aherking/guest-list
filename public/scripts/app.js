'use strict';
const angular = require('angular');

//Create a new module "guestListApp" (with an empty array)
angular.module('guestListApp', []);

//Add services/directives/ and controllers to app
require('./scripts/services');
require('./scripts/directives');
require('./scripts/controllers');
