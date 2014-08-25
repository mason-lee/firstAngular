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
var myApp = angular.module('myApp', ['ngRoute']);

// Configure our routes
myApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
		// route for home page
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})

		// route for about page
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'aboutController'
		})

		//route for project page
		.when('/project', {
			templateUrl: 'views/project.html',
			controller: 'projectController'
		})

		// route for contact page
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'contactController'
		});

	// Use the HTML5 History API
	if(window.history && window.history.pushState){
		$locationProvider.html5Mode(true);
	}
});

myApp.controller('mainController', function($scope) {
	$scope.message = 'Hello';
});

myApp.controller('aboutController', function($scope) {
	$scope.message = 'I am at about page.';
});

myApp.controller('projectController', function($scope) {
	$scope.message = 'I am at project page.';
});

myApp.controller('contactController', function($scope) {
	$scope.message = 'I am at contact page';
});