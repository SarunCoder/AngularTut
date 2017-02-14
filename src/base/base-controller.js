(function (angular) {
	'use strict';

	function BaseController() {}

	function config() {}

	config.$inject = [];

	angular
		.module('angular-tutorials-app', [])
		.constant('API_BASE', '')
		.config(config)
		.controller('BaseController', BaseController)
	;
}(angular));