var controllers = angular.module('MyApp.controller', []);

controllers.controller('MainController', ['$scope', function ($scope) {
    $scope.adding = function () {
        console.log('debris');
        $scope.result = $scope.operandOne + $scope.operandTwo; 
    }
    $scope.subtracting = function () {
        console.log('hello');
        $scope.result = $scope.operandOne - $scope.operandTwo;
    }
    $scope.multiplying = function () {
        console.log('I multiplied!');
        $scope.result = $scope.operandOne * $scope.operandTwo;
    }
    $scope.dividing = function () {
        console.log('I divided!');
        $scope.result = $scope.operandOne / $scope.operandTwo;
    }
    
}])

