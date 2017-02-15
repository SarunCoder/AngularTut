(function (angular) {
	'use strict';

	angular
		.module('value.students', [])
		.value('STUDENTS_LIST', [
				{
					"name": "Jacob",
					"age": 20,
					"collegeYear": 2,
					"credits": 9,
					"points": 0
				},
				{
					"name": "kathy",
					"age": 19,
					"collegeYear": 2,
					"credits": 9,
					"points": 0
				},
				{
					"name": "Andrew",
					"age": 18,
					"collegeYear": 1,
					"credits": 9,
					"points": 0
				},
				{
					"name": "Matthew",
					"age": 20,
					"collegeYear": 3,
					"credits": 18,
					"points": 0
				},
				{
					"name": "Mike",
					"age": 18,
					"collegeYear": 4,
					"credits": 27,
					"points": 0
				}
			])
	;
}(angular));
