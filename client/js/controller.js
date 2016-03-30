var controllers = angular.module('MyApp.controller', []);

controllers.controller('MainController', ['$scope', function ($scope) {
    $scope.adding = function () {
        console.log('debris');
    }
    
}])

