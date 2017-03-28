'use strict';

//Guest directive
function GuestDirective () {
  return {
    templateUrl: 'templates/guest.html',
    replace: true,
    controller: 'guestCtrl'
  }
}

module.exports = GuestDirective;
