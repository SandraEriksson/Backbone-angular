
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

app.controller("sortController", function ($scope) {

    var products = [
        { productname: "Apple iPhone 7", category: "Mobiltelefon", shortdescription: "32GB Svart", price: 4299, instock: 100, instockdate: new Date("2019-03-01") },
        { productname: "HP Probook 640 G4", category: "Bärbar", shortdescription: "HP Probook 640 G4", price: 8490, instock: 100, instockdate: new Date("2019-03-01") },
        { productname: "Lenovo ThinkCentre M710q Tiny", category: "Dator", shortdescription: "Core i5 8GB 256GB SSD", price: 5990, instock: 90, instockdate: new Date("2019-03-01") },
        { productname: "Dell UltraSharp U2412M Svart", category: "Skärm", shortdescription: "24", price: 2290, instock: 10, instockdate: new Date("2019-03-02") },
        { productname: "HP Probook 650 G4", category: "Bärbar", shortdescription: "Core i5 8GB 256GB SSD 15.6", price: 8490, instock: 80, instockdate: new Date("2019-03-02") },
        { productname: "Lenovo ThinkVision P27q", category: "Skärm", shortdescription: "27 2560 x 1440 16:9", price: 3190, instock: 14, instockdate: new Date("2019-03-01") },
        { productname: "Dell UltraSharp U2417H Infinity", category: "Skärm", shortdescription: "23.8 1920 x 1080 16:9", price: 2390, instock: 100, instockdate: new Date("2019-03-04") },
        { productname: "Apple iPhone 8", category: "Mobiltelefon", shortdescription: "64GB Rymdgrå", price: 6990, instock: 100, instockdate: new Date("2019-03-02") },
        { productname: "Dell UltraSharp U2412M Svart", category: "Skärm", shortdescription: "24 1920 x 1200 16:10", price: 2290, instock: 100, instockdate: new Date("2019-03-05") },
        { productname: "Logitech MX Master for Business", category: "Datormus", shortdescription: "Laser 1600dpi Mus Svart", price: 699, instock: 70, instockdate: new Date("2019-03-01") },
        { productname: "Dell UltraSharp U2412M Svart", category: "Skärm", shortdescription: "24 1920 x 1200 16:10", price: 2290, instock: 100, instockdate: new Date("2019-03-05") },
        { productname: "Logitech MX Master for Business", category: "Datormus", shortdescription: "Laser 1600dpi Mus Svart", price: 699, instock: 70, instockdate: new Date("2019-03-01") }
    ];

    $scope.products = products;
    //$scope.sortColumn = "productname";







});




/*slut sortera efter*/
