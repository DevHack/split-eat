(function (module) {
    'use strict';
    function splitEatController($scope, $mdDialog, usersService) {
        var self = this;
        this.init = function () {
            $scope.userDetails = null;
        };

        self.loadData = function () {
            $scope.userDetails = usersService.getData();
        };

        $scope.showAddTransactionDialog = function (ev) {
            $mdDialog.show({
                templateUrl: 'partials/add-transaction.html',
                controller: 'transactionController',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };
        $scope.showPaymentDialog = function (ev) {
            $mdDialog.show({
                templateUrl: 'partials/payment.html',
                controller: 'paymentController',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };
        $scope.$on("dataUpdated", self.loadData);
        self.init();
    }

    splitEatController.$inject = ['$scope', '$mdDialog', 'usersService'];

    angular.module(module).controller("splitEatController", splitEatController);
})(splitEatModule);
