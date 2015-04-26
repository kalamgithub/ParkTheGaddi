angular.module('ParkingSlotApp.controllers', []).

  /* ParkingSlots controller */
  controller('parkingSlotsController', ['$scope', function($scope) {
    var parkingSlots = [
      { id : 1, location : 'Hitech Railway Station', city : 'Hyderabad' },
      { id : 2, location : 'JNTUH', city : 'Hyderabad' },
      { id : 3, location : 'BACI, Manjeera', city : 'Hyderabad' }
    ];

    $scope.parkingSlots = parkingSlots;

  }]).

  /* ParkingSlot controller */
  controller('parkingSlotController', ['$scope', '$routeParams', '_', function($scope, $routeParams, _) {
    $scope.id = $routeParams.id;

    var parkingSlots = [
      { id : 1, location : 'Hitech Railway Station', city : 'Hyderabad' },
      { id : 2, location : 'JNTUH', city : 'Hyderabad' },
      { id : 3, location : 'BACI, Manjeera', city : 'Hyderabad' }
    ];

    $scope.parkingSlot = parkingSlots[0];

  }]);

