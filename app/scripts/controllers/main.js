'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myApp
 */
angular.module('myApp')
	.controller('MainCtrl', function ($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		// Person Object
		$scope.person = {
			name: "Mason Lee"
		};
		
		$scope.delay = 2000;
		$scope.slides = [
			{'title': 'hell', 'class': 'animation-slide', 'image': 'https://raw.github.com/esvit/bz-slider/master/examples/images/image1.png'},
			{'title': 'sadas', 'class': 'animation-fade', 'image': 'https://raw.github.com/esvit/bz-slider/master/examples/images/image2.png'}
		];
	});

// optional controllers
// function HomeCtrl($scope, $http) {

// }

// function AboutCtrl($scope, $http) {
	
// }

// function ContactCtrl($scope, $http) {
	
// }

// function PortfolioCtrl($scope, $http) {
	
// }
