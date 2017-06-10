/**
 * Created by Dj on 4/3/2017.
 */
(function (module) {
    "use strict";
    function paymentController($scope, usersService) {
        var self = this;
        this.init = function () {
            $scope.users = usersService.getData();
            $scope.isDisabled = false;
            console.log($scope.users);
        };
        self.init();

        $scope.isAnyOneSelected = function () {
            $scope.users.map(function (item) {
                return item.payingUser ? false : true;
            });
        };
    }

    paymentController.$inject = ["$scope", "usersService"];
    angular.module(module).controller("paymentController", paymentController);
})(splitEatModule);