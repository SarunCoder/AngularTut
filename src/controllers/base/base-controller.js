(function (angular) {
	'use strict';

	function BaseController($scope) {
		// $scope variables
		$scope.VAR1 = "I am the value of $scope.VAR1";
		$scope.VAR2 = "I am the value of $scope.VAR2";

		$scope.currentTime = (new Date()).getTime();

		$scope.updateTime = function () {
			// console.log($scope.$apply);
			$scope.currentTime = (new Date()).getTime();
			
		};

		// Update time after approx 8 seconds
		$scope.autoUpdate = function () {
			setTimeout(function() {
	          $scope.currentTime = (new Date()).getTime();;
	          console.log('Updated $scope Time: '+ $scope.currentTime);
	        }, 8000);
		};
		$scope.autoUpdate();


		var ctrl = this;
		// Ctrl variables
		ctrl.VAR1 = "I am the value of BaseController.VAR1";
		ctrl.VAR2 = "I am the value of BaseController.VAR2";

		ctrl.currentTime = (new Date()).getTime();

		ctrl.updateTime = function () {
			ctrl.currentTime = (new Date()).getTime();
		};

		// Update time after approx 4 seconds
		ctrl.refreshScope = function () {
			setTimeout(function () {
				$scope.$apply(function() {
					ctrl.currentTime = (new Date()).getTime();
					console.log('Updated Controller Time: '+ $scope.currentTime);
				});
			}, 3000);
		};
		ctrl.refreshScope();
	}

	BaseController.$inject = ['$scope'];

	function config() {}

	config.$inject = [];

	angular
		.module('angular-tutorials-app', [])
		.constant('API_BASE', '')
		.config(config)
		.controller('BaseController', BaseController)
	;
}(angular));
