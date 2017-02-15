(function (angular) {
	'use strict';

	function BaseController($scope, $rootScope) {
		console.log("Base controller says Hello too!!!");
		// console.log("Lets have a look at the $scope object below....");
		// console.log($scope);
		// console.log("Lets have a look at the $rootScope object below....");
		// console.log($rootScope);
	}

	BaseController.$inject = ['$scope', '$rootScope'];

	function config() {
		console.log("Base module config function says Hello!!!");
	}

	config.$inject = [];

	angular
		.module('angular-tutorials-app', [])
		.constant('API_BASE', '')
		.config(config)
		.controller('BaseController', BaseController)
	;
}(angular));
