
/*Sortera efter*/
var app = angular.module("sortApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "view/home.html",
            controller: "sortController"
        })

        .when("/list", {
            templateUrl: "view/list.html",
            controller: "sortController"
        })
});

app.controller("sortController", function ($scope, $http) {

    $http.get("http://localhost:5000/books").then(function(res) {
        $scope.products = res.data;
        console.log($scope.products);
    })

    const starsTotal = 5;
    
    //$scope.products = products;
    $scope.rating = function(input) {
        return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
    } 

});


