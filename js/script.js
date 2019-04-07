
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

    const starsTotal = 5;

    var products = [
        { productname: "...får leken tåla", authour: "MJ Arldige", category: "Pocket", price: 54, rating: 5.0 },
        { productname: "Allt jag fått lära mig", authour: "Tara Westover", category: "Inbunden", price: 179, rating: 3 },
        { productname: "En bur av guld", authour: "Camilla Läckberg", category: "Inbunden", price: 175, rating: 2.0  },
        { productname: "En underbar död", authour:"Emma Ångström", category: "Inbunden", price: 149, rating: 1.2 },
        { productname: "Lazarus", authour: "Lars Kepler", category: "Ljudbok", price: 106, rating: 4.0 },
        { productname: "1793", authour: "Niklas Natt och Dag", category: "Ljudbok", price: 71, rating: 3.8  },
        { productname: "Min historia", authour: "Michelle Obama", category: "E-bok", price: 98,rating: 4.2  },
        { productname: "Bränn alla mina brev", authour: "Alex Schulman", category: "E-bok", price: 147, rating: 1.2  },
        { productname: "En mors bekännelse", authour: "Kelly Rimmer", category: "Pocket", price: 59, rating: 4.7  },
        { productname: "Saknad, förmodad död", authour: "Susie Steiner", category: "Pocket", price: 57, rating: 2.0  },
        { productname: "Isfiskaren", authour: "Anna Ihrén", category: "Pocket", price: 54, rating: 4.9  },
        { productname: "Fyrmästaren", authour: "Anna Ihrén", category: "Pocket", price: 54, rating: 1.8  }
    ];

    $scope.products = products;
    $scope.rating = function(input) {
        return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
    } 

});


