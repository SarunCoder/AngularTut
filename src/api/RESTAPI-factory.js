(function (angular) {
	'use strict';

	angular
		.module('api.students-server', ['ngResource'])
		.factory('ApiStudents', ApiStudents)
	;

	ApiStudents.$inject = ['$resource'];
	function ApiStudents($resource) {
		var resourceURL = '';

		return $resource(
			resourceURL,
			{ id: '@id'},
			{
				update: {
					method: 'PUT'
				}
			}
		);
	}
})(angular);
