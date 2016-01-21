// controller.edit = function() {}
angular.module('tinder', []);

angular.module('tinder')
	.controller('profile', ['$scope', function($scope) {

	$scope.showInput = [false, false, false];

	$scope.modify = function(n) {
		$scope.showInput[n] = true;
	}

	$scope.doneTalking = function(n) {
		$scope.showInput[n] = false;
	}

}])