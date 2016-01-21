// controller.edit = function() {}
angular.module('tinder', []);

angular.module('tinder')
	.controller('profile', ['$scope', '$timeout', function($scope, $timeout) {

	$scope.displayTextarea = [false, false, false];

	$scope.userData = [
	'My name is Sean!',
	 'I like Michigan State Spartans. They\'re great. They\'re my favorite. If I could play for a football team team, I would play for the Michigan State Spartans.',
	 'I\'m great. I like going on dates if I can drink a beer on our date. I really like beer, too. I can drink my beer and you can talk and if we like eachother we can do it again!']

	$scope.modifyData = function(n, event) {
		$scope.displayTextarea[n] = true;
		$timeout(function() {
			event.target.nextElementSibling.focus();
		});
	}

	$scope.doneEditing = function(n) {
		$scope.displayTextarea[n] = false;
	}

}])