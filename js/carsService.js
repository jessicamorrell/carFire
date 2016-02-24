angular.module('carFireApp').service('carsService', function($http) {
	var ref = new Firebase('https://luminous-heat-9103.firebaseio.com/')
	this.getCars = function() {
		return ref.child('cars')
	}
	this.getCar = function(carId) {
		return ref.child('cars').child(carId)
	}
	this.getComments = function(carId) {
		return ref.child('cars/' + carId + '/comments')
	}

})