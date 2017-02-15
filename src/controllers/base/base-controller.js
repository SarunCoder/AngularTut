(function (angular) {
	'use strict';

	function BaseController($scope, StudentService, STUDENTS_LIST) {

		var Student = function () {
			return {
				"name": "",
				"age": 0,
				"collegeYear": 0,
				"credits": 0,
				"points": 0
			};
		};

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
	          // console.log('Updated $scope Time: '+ $scope.currentTime);
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
					// console.log('Updated Controller Time: '+ $scope.currentTime);
				});
			}, 3000);
		};
		ctrl.refreshScope();


		// Form error
		$scope.formError = "";
		// Using Service recipe
		StudentService.setCurrentStudentList(STUDENTS_LIST);

		// Repeaters and ng-model
		ctrl.students = StudentService.getCurrentStudentList();
		ctrl.newStudent = Student();

		ctrl.addNewStudent = function() {
			var returnVal = StudentService.addStudent(ctrl.newStudent);
			if(returnVal instanceof Error) {
				$scope.formError = returnVal.message;
				// throw returnVal;
				alert(returnVal.message);
			} else {
				ctrl.students = returnVal;
				$scope.formError = "";
			}
		};
	}

	BaseController.$inject = ['$scope', 'StudentService', 'STUDENTS_LIST'];

	function config($provide, STUDENTS_LIST_CONSTANT) {
		console.log('MESSAGE: Config functionruns first before controller and value');
		// console.log(STUDENTS_LIST_CONSTANT);
		var alumni = {
			"name": "Sakthi",
			"age": 28,
			"collegeYear": 5,
			"credits": 33,
			"points": 100
		};
		var STUDENTS_LIST = STUDENTS_LIST_CONSTANT;
		STUDENTS_LIST.push(alumni);

		$provide.value('STUDENTS_LIST', STUDENTS_LIST);
	}

	config.$inject = ['$provide', 'STUDENTS_LIST_CONSTANT'];

	angular
		.module('angular-tutorials-app', [
			'constant.students',
			'services.student-service',
			'directive.students-list'
		])
		.constant('API_BASE', '')
		.config(config)
		.controller('BaseController', BaseController)
	;
}(angular));
