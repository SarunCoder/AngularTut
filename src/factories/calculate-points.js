(function (angular) {
	'use strict';

	function calculatePoints(pointsPerCredit) {
		var calculator = function (credits) {
			return pointsPerCredit * credits;
		};
		return calculator;
	}

	calculatePoints.$inject = ['pointsPerCredit'];


	angular
		.module('factory.credit-calculator', [])
		.value('pointsPerCredit', 5)
		.factory('CalculatePoints', calculatePoints)
	;
}(angular));
