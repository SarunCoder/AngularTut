(function (angular) {
	'use strict';

	function studentService(CalculatePoints) {
		var currentStudentList = [];

		this.setCurrentStudentList = function (list) {
			currentStudentList = list;
		};

		this.getCurrentStudentList = function() {
			return currentStudentList;
		};

		this.addStudent = function (student) {
			if(_.isNil(student.name) || _.isEmpty(student.name)) {
				return new Error('Invalid Student name...');
			}
			var newStudent = _.clone(student);

			// Invoking factory to calculate points
			newStudent.points = CalculatePoints(newStudent.credits);
			// console.log(newStudent); 
			currentStudentList.push(newStudent);
			return currentStudentList;
		};
	}

	studentService.$inject = ['CalculatePoints'];

	function initialize() {}

	initialize.$inject = [];

	angular
		.module('services.student-service', [
			'factory.credit-calculator'
		])
		.run(initialize)
		.service('StudentService', studentService)
	;
}(angular));
