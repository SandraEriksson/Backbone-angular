
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

        .when("/cart", {
            templateUrl: "view/shoppingcart.html",
            controller: "sortController"
        })

        .when("/yourpage", {
            templateUrl: "view/yourpage.html",
            controller: "registerController"
        })

        .when("/register", {
            templateUrl: "view/register.html",
            controller: "registerController"
        })
});

app.controller("registerController", function($scope, $http){
    $scope.submitRegistration = function(form) {
        
        console.log(this.registrationForm.get('firstname').value);
        //$http.post()
    }
});

app.controller("sortController", function ($scope, $http) {
    var tempCart = localStorage.getItem('localCart');

    if (tempCart == null)
        $scope.cart = []
    else
        $scope.cart = JSON.parse(tempCart);

    $scope.addItem = function (product) {
        $scope.cart.push(angular.copy(product));
        localStorage.setItem('localCart', JSON.stringify($scope.cart));
    }

    $scope.removeItem = function(product) {
        var index = $scope.cart.indexOf(product);
        $scope.cart.splice(index, 1);
        localStorage.removeItem('localCart', JSON.stringify($scope.cart));
    }

    /*$scope.getQuantity = function() {
        var quantity = _.reduce($scope.cart, function(sum, product) {
            return sum + $scope.getProductQuantity(product);
        }, 0);

        if(quantity === 0) {
            $scope.badgeColor = "badge-secondary"
        } else {
            $scope.badgeColor = "badge-danger"
        }


        return quantity;
    }
*/
$scope.getProductCost = function(product) {
    return product.quantity * product.price;
}

$scope.getTotal = function() {
    var total = _.reduce($scope.cart, function(sum, product) {
        return sum + $scope.getProductCost(product);
    }, 0);

    if($scope.cart.length === 0) {
        $scope.emptycart = "Your cart is empty."
    }
    else {
        $scope.emptycart = ""
    }   
    return total;
}

    $http.get("http://localhost:5000/books").then(function (res) {
        $scope.products = res.data;
    })

    const starsTotal = 5;

    $scope.rating = function (input) {
        return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
    }

});