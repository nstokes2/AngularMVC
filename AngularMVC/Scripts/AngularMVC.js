//this is used instead of ui.router for single page single view changing
//var AngularMVC = angular.module('AngularMVC', ['ngRoute', 'ui.bootstrap']);

//used for multiple views and expanded routing
var AngularMVC = angular.module('AngularMVC', ['ui.router', 'ui.bootstrap']);

AngularMVC.controller('LandingPageController', LandingPageController);
AngularMVC.controller('LoginController', LoginController);
AngularMVC.controller('RegisterController', RegisterController);

AngularMVC.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularMVC.factory('LoginFactory', LoginFactory);
AngularMVC.factory('RegistrationFactory', RegistrationFactory);

/* used for ngRoute and ngView
var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {

    

    $routeProvider.
    when('/routeOne', { templateUrl: 'routesDemo/one' })
    .when('/routeTwo/:donuts', { templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; } })
    .when('/routeThree', { templateUrl: 'routesDemo/three' })
    .when('/login', { templateUrl: 'Account/Login', controller: LoginController })
    .when('/register', {templateUrl: 'Account/Register', controller: RegisterController });
    */
var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);
$stateProvider
       .state('stateOne', {
           url: '/stateOne?donuts',
           views: {
               "containerOne": {
                   templateUrl: '/routesDemo/one'
               },
               "containerTwo": {
                   templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
               }
           }
       })
       .state('stateTwo', {
           url: '/stateTwo',
           views: {
               "containerOne": {
                   templateUrl: '/routesDemo/one'
               },
               "containerTwo": {
                   templateUrl: '/routesDemo/three'
               }
           }
       })
       .state('stateThree', {
           url: '/stateThree?donuts',
           views: {
               "containerOne": {
                   templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
               },
               "containerTwo": {
                   templateUrl: '/routesDemo/three'
               }
           }
       })
       .state('loginRegister', {
           url: '/loginRegister?returnUrl',
           views: {
               "containerOne": {
                   templateUrl: '/Account/Login',
                   controller: LoginController
               },
               "containerTwo": {
                   templateUrl: '/Account/Register',
                   controller: RegisterController
               }
           }
       });

    
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];
AngularMVC.config(configFunction);