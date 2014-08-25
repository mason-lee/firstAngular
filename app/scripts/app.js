'use strict';

/**
 * @ngdoc overview
 * @name myApp
 * @description
 * # myApp
 *
 * Main module of the application.
 */
angular.module('myApp', ['ngCookies', 'ngSanitize', 'ngRoute']).
	config(['$routeProvider', function($routeProvider) {
			$routeProvider.
				when('/', { templateUrl: 'views/main.html', activetab: 'home', controller: HomeCtrl}).
				when('/about', { templateUrl: 'views/about.html', activetab: 'about', controller: AboutCtrl}).
				when('/portfolio', { templateUrl: 'views/portfolio.html', activetab: 'portfolio', controller: PortfolioCtrl}).
				otherwise({redirectTo: '/'});
	}]).run(['$rootScope', '$http', '$browser', '$timeout', '$route', function($scope, $http, $browser, $timeout, $route) {
		$scope.$on("$routeChangeSuccess", function (scope, next, current) {
				$scope.part = $route.current.activetab;
		});
		
		// OnClick event handlers
		$scope.showForm = function() {

		};

		$scope.closeForm = function() {

		};


	}]);

// app.config(['$locationProvider', function($location) {

// }])



