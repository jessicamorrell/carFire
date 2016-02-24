angular.module('carFireApp').controller('carCtrl', function($scope, $firebaseObject, $firebaseArray, carRef, commentsRef) {
	$scope.car = $firebaseObject(carRef)
	console.log($scope.car)
	$scope.comments = $firebaseArray(commentsRef)
	$scope.sendComment = function() {
		$scope.comments.$add({
			text: $scope.newComment,
			timestamp: new Date().getTime()
		})
		$scope.newComment = ''
	}
})