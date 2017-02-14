(function (angular) {
	'use strict';

	function BaseController() {
		console.log(_.head([1, 2, 3]));
	}

	function config() {}

	config.$inject = [];

	angular
		.module('angular-tutorials-app', [])
		.constant('API_BASE', '')
		.config(config)
		.controller('BaseController', BaseController)
	;
}(angular));