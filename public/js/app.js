var app= angular.module('myApp', ['ngRoute'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/signin', {
                templateUrl: '/partials/signin.html',
                controller: 'authController'
            }).
            when('/signup', {
                templateUrl: '/partials/signup.html',
                controller: 'authController'
            }).
            when('/user', {
                templateUrl: '/partials/userinfo.html',
                controller: 'authController'
            }).
            otherwise({
                redirectTo: '/signin'
            });
    }]);