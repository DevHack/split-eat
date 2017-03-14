app.controller('splitEatController', ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog', '$http', 'usersService', function ($scope, $mdBottomSheet, $mdSidenav, $mdDialog, $http, usersService) {
    var self = this;
    this.init = function () {
        $scope.userDetails = null;
    };

    self.loadData = function () {
        $scope.userDetails = usersService.getData();
    };

    $scope.showDialog = function () {
        console.log("called");
        $mdDialog.show({
            templateUrl: 'partials/add-transaction.html',
            controller: 'transactionController',
            controllerAs: 'vm'
        });
    };
    $scope.$on("dataUpdated", self.loadData);
    self.init();
}]);