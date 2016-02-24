angular.module('carFireApp').controller('carsCtrl', function($scope, carsRef, $firebaseArray) {
	$scope.cars = $firebaseArray(carsRef);
	console.log($scope.cars);
	//$scope.car = $firebaseObject
	// 	make:'foo',
	// 	modle:'car',
	// 	year: '1222',
	// 	mileage: '12000',
	// 	price: '$1'
	// }]
})