var splitEat = angular.module('Split-eat', ['ngMaterial', 'ngMessages']);

splitEat.controller('splitEatController', function ($scope) {
    $scope.init = function () {
        console.log("init");
    };
    $scope.init();
});