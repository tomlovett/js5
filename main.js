// controller.edit = function() {}
angular.module('tinder', []);

angular.module('tinder')
	.controller('profile', ['$scope', '$timeout', function($scope, $timeout) {

	$scope.displayTextarea = [false, false, false];

	$scope.userData = [
	'Lorem ipsum dolor sit amet, id alterum postulant cotidieque mea, sed nisl sadipscing intellegebat eu. Duo at deleniti delicata, at vel tibique reformidans, in vero meliore vim. Abhorreant accommodare est ut, debitis voluptaria appellantur qui ad, duo an dicit utamur.',
	 'Vix viris officiis ei, rebum simul cetero vel ea. Et vis ludus libris tibique, quo et velit movet consequuntur. Duo brute sanctus mnesarchum at, quem definiebas eloquentiam ne qui. Etiam consectetuer cu has. Pro cu partem audiam facilis, liber epicuri scribentur vis cu.',
	 'Tantas melius persequeris sit ne, ut facer iudicabit sea. An mei velit docendi ponderum, solum dolorum suavitate an nec, vix agam ferri iriure an. Has prodesset posidonium necessitatibus ei. Nisl aperiri virtute nam et. Errem affert sed ex, an laudem aliquando scribentur duo.']

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