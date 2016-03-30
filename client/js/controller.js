var controllers = angular.module('MyApp.controller', []);

controllers.controller('MainController', ['$scope', function ($scope) {
    
    function inputIsInvalid() {
        // return $scope.operandOne != null && $scope.operandTwo != null;
        if ($scope.operandOne == undefined || $scope.operandTwo == undefined) {
            return true;
        } else {
            return false;
        }
    }
    
    $scope.adding = function () {
       if (inputIsInvalid()) {
            alert('Both operands are required!');
            return
        }
        console.log('I summed!');
        $scope.answer = $scope.operandOne + $scope.operandTwo;
        $scope.result = 'The result of adding ' + $scope.operandOne + ' and ' + $scope.operandTwo + ' is ' + $scope.answer;
        $scope.clearForms(); 
    }
    $scope.subtracting = function () {
        if (inputIsInvalid()) {
            alert('Both operands are required!');
            return
        }
        console.log('I subracted!');
        $scope.answer = $scope.operandOne - $scope.operandTwo;
        $scope.result = 'The result of subtracting ' + $scope.operandOne + ' and ' + $scope.operandTwo + ' is ' + $scope.answer;
        $scope.clearForms();
    }
    $scope.multiplying = function () {
         if (inputIsInvalid()) {
            alert('Both operands are required!');
            return
        }
        console.log('I multiplied!');
        $scope.answer = $scope.operandOne * $scope.operandTwo;
        $scope.result = 'The result of multiplying ' + $scope.operandOne + ' and ' + $scope.operandTwo + ' is ' + $scope.answer;
        $scope.clearForms();
    }
    $scope.dividing = function () {
         if (inputIsInvalid()) {
            alert('Both operands are required!');
            return
        }
        else if ($scope.operandTwo == 0) {
            alert('You cannot divide by zero. Do not perform the calculation, or else!');
            return
        }
        console.log('I divided!');
        $scope.answer = $scope.operandOne / $scope.operandTwo;
        $scope.result = 'The result of dividing ' + $scope.operandOne + ' and ' + $scope.operandTwo + ' is ' + $scope.answer;
        $scope.clearForms();
    }
    
    $scope.clearForms = function () {
        $scope.operandOne = 0;
        $scope.operandTwo = 0;
    }
    
    // $scope.errorCatch = function () {
    //     if ($scope.operandOne == null || $scope.operandTwo == null) {
    //         alert('Both operands are required!');
    //         return
    //     }
    // }
    
}])

