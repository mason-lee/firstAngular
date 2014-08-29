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
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'bzSlider']);

// Configure our routes
myApp.config(function($routeProvider, $locationProvider) {

	$routeProvider
		// route for home page
		.when('/', {
			templateUrl: 'views/project.html',
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

	$locationProvider.html5Mode(false);
}).run(['$rootScope', '$http', '$browser', '$timeout', '$route', function($scope, $http, $browser, $timeout, $route) {
	$scope.$on('$routeChangeSuccess', function(scope, next, current) {
		$scope.part = $route.current.activetab;
	});
}]);

myApp.controller('mainController', function($scope) {
	$scope.delay = 2000;
	$scope.slides = [
		{'title': 'first', 'class': 'animation-fade', 'image': 'images/hero1.jpg'},
		{'title': 'second', 'class': 'animation-fade', 'image': 'images/hero2.jpg'},
		{'title': 'third', 'class': 'animation-fade', 'image': 'images/hero3.jpg'}
	];
	$scope.pageClass="page-transition";
	$scope.slideClass="image-fade";
});

myApp.controller('aboutController', function($scope) {
	$scope.pageClass="page-transition";	
});

myApp.controller('projectController', function($scope) {
	$scope.pageClass="page-transition";
});

myApp.controller('contactController', function($scope) {
	$scope.pageClass="page-transition";
});

/**
 * [Custome directive "scroll"]
 * @param  {[type]} $window
 * @return {[type]}
 */
// myApp.directive("scroll", function($window, $document) {
	
// 	/**
// 	 *  Remove .landing-wrapper when scrolled down (change the color
// 	 *  of "PROJECT" link) and on any other page.
// 	 */
// 	return function(scope, element, attrs)  {
// 		angular.element('body').bind("scroll", function  () {
// 			// body...
// 			console.log("scrolling!");
// 		})
// 	}
// 	// return {
// 	// 	link: function(scope, element, attrs) {
// 	// 			angular.element('body').bind("scroll", function() {
					
// 	// 				// var screenHeight = angular.element($window).height();
// 	// 				// var elementHeight = element.prop('offsetHeight');
// 	// 				alert($document.scrollTop())
// 	// 				alert(this.pageYOffset);
// 	// 				if(this.pageYOffset >= screenHeight) {
// 	// 					scope.boolChangeClass = true;
// 	// 				}
// 	// 				// else {
// 	// 				// 	scope.boolChangeClass = false;
// 	// 				// }
// 	// 			scope.$apply();
// 	// 		})
// 	// 	}
// 	// }
// });
// 
myApp.directive("scroll", function ($window) {
	return function(scope, element, attrs) {
      	angular.element($window).bind("scroll", function() {
	            var screenHeight = angular.element($window).height();
	            // console.log(screenHeight);

	            if (this.pageYOffset >= screenHeight) {
	            	if (!scope.boolChangeClass) {
		            	scope.boolChangeClass = true;
		            	$(window).scrollTop(0);
		            }
	                  // console.log('Scrolled below header.');
	            } 
	            else {
		            // scope.boolChangeClass = false;
		            // console.log('Header is in view.');
	            }
	            scope.$apply();
	      });
      };
});












