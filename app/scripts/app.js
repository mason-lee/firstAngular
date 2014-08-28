'use strict';

/**
 * @ngdoc overview
 * @name myApp
 * @description
 * # myApp
 *
 * Main module of the application.
 */

// Create a module and name it myApp
	// Also include ngRoute for all our routing needs
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'bzSlider', 'snap']);

// Configure our routes
myApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
		// route for home page
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController',
			activetab: 'home'
		})

		// route for about page
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'aboutController',
			activetab: 'about'
		})

		//route for project page
		.when('/project', {
			templateUrl: 'views/project.html',
			controller: 'projectController',
			activetab: 'project'
		})

		// route for contact page
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'contactController',
			activetab: 'contact'
		})

		.otherwise({ redirectTo: '/' });

	// Use the HTML5 History API
	if(window.history && window.history.pushState){
		$locationProvider.html5Mode(true);
	}
}).run(['$rootScope', '$http', '$browser', '$timeout', '$route', function($scope, $http, $browser, $timeout, $route) {
	$scope.$on('$routeChangeSuccess', function(scope, next, current) {
		$scope.part = $route.current.activetab;
	});
}]);

myApp.controller('mainController', function($scope) {
	$scope.delay = 2000;
	$scope.slides = [
		{'title': 'first', 'class': 'animation-slide', 'image': 'images/hero1.jpg'},
		{'title': 'second', 'class': 'animation-slide', 'image': 'images/hero2.jpg'},
		{'title': 'third', 'class': 'animation-slide', 'image': 'images/hero3.jpg'}
	];

	
});

myApp.controller('aboutController', function($scope) {
	
});

myApp.controller('projectController', function($scope) {
	
});

myApp.controller('contactController', function($scope) {
	
});