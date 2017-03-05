//Angular Creates Guest List, see the empty array?
angular.module("guruGuestList", [])
.controller('mainCtrl', function($scope) {
  $scope.list = function() {
    console.log("This is the list(mainCtrl) controller");
  };
});

//add new categories controllers
