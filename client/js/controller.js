var controllers = angular.module('MyApp.controller', []);

controllers.controller('MainController', ['$scope', function ($scope) {
    $scope.adding = function () {
       if ($scope.operandOne == null || $scope.operandTwo == null) {
            alert('Both operands are required!');
            return
        }
        console.log('debris');
        $scope.answer = $scope.operandOne + $scope.operandTwo;
        $scope.result = 'The result of adding ' + $scope.operandOne + ' and ' + $scope.operandTwo + ' is ' + $scope.answer;
        $scope.clearForms(); 
    }
    $scope.subtracting = function () {
        $scope.errorCatch();
        console.log('hello');
        $scope.answer = $scope.operandOne - $scope.operandTwo;
        $scope.result = 'The result of subtracting ' + $scope.operandOne + ' and ' + $scope.operandTwo + ' is ' + $scope.answer;
        $scope.clearForms();
    }
    $scope.multiplying = function () {
        $scope.errorCatch();
        console.log('I multiplied!');
        $scope.answer = $scope.operandOne * $scope.operandTwo;
        $scope.result = 'The result of multiplying ' + $scope.operandOne + ' and ' + $scope.operandTwo + ' is ' + $scope.answer;
        $scope.clearForms();
    }
    $scope.dividing = function () {
        console.log('I divided!');
        $scope.answer = $scope.operandOne / $scope.operandTwo;
        $scope.result = 'The result of dividing ' + $scope.operandOne + ' and ' + $scope.operandTwo + ' is ' + $scope.answer;
        $scope.clearForms();
    }
    
    $scope.clearForms = function () {
        $scope.operandOne = 0;
        $scope.operandTwo = 0;
    }
    
    $scope.errorCatch = function () {
        if ($scope.operandOne == null || $scope.operandTwo == null) {
            alert('Both operands are required!');
            return
        }
    }
    
}])

