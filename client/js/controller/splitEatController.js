app.controller('splitEatController', ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog', '$http', 'usersService', function ($scope, $mdBottomSheet, $mdSidenav, $mdDialog, $http, usersService) {
    var self = this;
    self.loadData = function () {
        $scope.userDetails = null;
        usersService.getData().then(function (response) {
            $scope.userDetails = response;
        });
    };
    self.loadData();

    $scope.showDialog = function () {
        console.log("called");
        $mdDialog.show({
            templateUrl: 'partials/add-transaction.html',
            controller: 'transactionController',
            controllerAs: 'vm'
        });
    };
    $scope.$on("dataUpdated", self.loadData);
}]);