var app = angular.module('absensiqr-app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: './page/home.html'
    });
});