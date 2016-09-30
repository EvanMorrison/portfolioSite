    angular.module('portfolio', ['ngMaterial']);


angular.module("portfolio")
.controller("PortfolioController", ["$scope", "$mdSidenav", "$log", function($scope, $mdSidenav, $log){
    var self = this;
    self.title = 'Evan Portfolio';
}])
