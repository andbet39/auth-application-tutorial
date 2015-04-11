/**
 * Created by andrea.terzani on 09/04/2015.
 */

app.controller('authController', function($scope,$http,$location) {

    $scope.user  = {username:'',password:''};
    $scope.alert = '';

    $scope.login = function(user){
        $http.post('/auth/login', user).
            success(function(data) {
                $scope.loggeduser = data;
                $location.path('/user');
            }).
            error(function() {
                $scope.alert = 'Login failed'
            });

    };

    $scope.signup = function(user){
        $http.post('/auth/signup', user).
            success(function(data) {
                $scope.alert = data.alert;
             }).
            error(function() {
                $scope.alert = 'Registration failed'
            });

    };

    $scope.userinfo = function() {
        $http.get('/auth/currentuser').
            success(function (data) {
                $scope.loggeduser = data;
            }).
            error(function () {
                $scope.alert = 'Login failed'
            });
    };



    $scope.logout = function(){
        $http.get('/auth/logout')
            .success(function() {
                $scope.loggeduser = {};
                $location.path('/signin');

            })
            .error(function() {
                $scope.alert = 'Logout failed'
            });
    };
});
