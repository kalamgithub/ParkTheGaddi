angular.module('ParktheGaddiApp', [
  'ParkingSlotApp.controllers',
  'ngRoute',
  'ParkingSlotApp.controllers',
  'underscore'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/parkingSlots", {templateUrl: "partials/ParkingSlots.html", controller: "parkingSlotsController"}).
	when("/parkingSlot/:id", {templateUrl: "partials/ParkingSlot.html", controller: "parkingSlotController"}).
	otherwise({redirectTo: '/parkingSlots'});
}]);


/**
 * Let's you use underscore as a service from a controller.
 * Got the idea from: http://stackoverflow.com/questions/14968297/use-underscore-inside-controllers
 * @author: Andres Aguilar https://github.com/andresesfm
 */
// angular.module('underscore', []).factory('_', function() {
//     return window._; // assumes underscore has already been loaded on the page
// });