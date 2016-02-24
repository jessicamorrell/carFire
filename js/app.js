angular.module('carFireApp', ['ui.router', 'firebase'])

.config(function($urlRouterProvider, $stateProvider) {
	$stateProvider
		.state('cars', {
			url: '/cars',
			controller: 'carsCtrl',
			templateUrl: 'carTmpl.html',
			resolve: {
        		carsRef: function(carsService) {
            		return carsService.getCars();
            	}
        	}

		})
		.state('car', {
			url: '/cars/:carId',
			controller: 'carCtrl',
			templateUrl: 'carIdTmpl.html',
			resolve: {
       			carRef: function(carsService, $stateParams) {
            		return carsService.getCar($stateParams.carId);
        		},
        		commentsRef: function(carsService, $stateParams) {
            		return carsService.getComments($stateParams.carId);
        		}
    		}

		})
	$urlRouterProvider.otherwise('/cars')
})
