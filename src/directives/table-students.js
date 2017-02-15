(function(angular) {
	'use strict';

	angular
		.module('directive.students-list', [])
		.directive('studentsList', studentsList)
		.controller('studentsListCtrl', studentsListCtrl)
	;

	studentsList.$inject = [];
	function studentsList() {
		return {
			scope: {
				studentList: "="
			},
			controller: 'studentsListCtrl',
			controllerAs: 'studentsListCtrl',
			templateUrl: 'table.html'
		};
	}

	studentsListCtrl.$inject = [
		'$scope'
	];
	function studentsListCtrl(
		$scope
	) {
		var ctrl = this;
		ctrl.students = $scope.studentList;
		// console.log($scope);
	}
})(angular);
