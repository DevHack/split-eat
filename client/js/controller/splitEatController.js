app.controller('splitEatController', ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog', '$http', 'usersService', function ($scope, $mdBottomSheet, $mdSidenav, $mdDialog, $http, usersService) {

    $scope.init = function () {
        $scope.userDetails = null;
        usersService.getData().then(function (response) {
            $scope.userDetails = response;
            console.log($scope.userDetails.data, $scope.imagePath);
        });
    };
    $scope.init();

    $scope.showDialog = function () {
        console.log("called");
        $mdDialog.show({
            templateUrl: 'partials/add-transaction.html',
            controller: 'transactionController',
            controllerAs: 'vm'
        });
    };

}]);