(function (module) {

    "use strict";

    function transactionController($scope, $mdDialog, usersService, $http, $rootScope) {
        var self = this;

        this.init = function () {
            $scope.username = null;
            $scope.password = null;
            $scope.descrption = null;
            $scope.payee = null;
            $scope.cost = null;
            $scope.payee = null;
            $scope.participents = null;
            $scope.selected = [];
            $scope.date = null;
            $scope.items = usersService.getData();
        };

        $scope.closeDialog = function () {
            $mdDialog.hide();
        };

        $scope.addTransacion = function () {
            var config = {
                headers: {
                    'Content-Type': undefined
                }
            };
            $http({
                url: "https://orbzn6b2lk.execute-api.us-west-2.amazonaws.com/prod/createtransaction",
                method: "POST",
                data: self.getTransactionObj(),
                config: config
            }).success(function (data) {
                $rootScope.$broadcast("dataUpdated");
                return data;
            }).error(function () {
                alert("error");
                return null;
            });
            $scope.closeDialog();
        };

        self.getTransactionObj = function () {
            console.log($scope.items);
            console.log($scope.descrption);
            var participants = [];
            var payees = [];
            $scope.items.map(function (elem) {
                if (elem.participants) {
                    participants.push(elem.userId);
                }
                if (elem.payee) {
                    payees.push({paidAmount: parseInt(elem.cost, 10), payee: elem.userId});
                }
            });
            return {
                "transactionDate": $scope.date.toLocaleDateString(),
                "description": $scope.descrption,
                "participants": participants,
                "cost": payees,
                "groupieId": "panchobanjyon"
            }
        };

        $scope.toggle = function (item, list) {
            var idx = list.indexOf(item);
            if (idx > -1) {
                list.splice(idx, 1);
            } else {
                list.push(item);
            }
        };

        $scope.exists = function (item, list) {
            return list.indexOf(item) > -1;
        };

        this.init();
    }

    transactionController.$inject = ["$scope", "$mdDialog", "usersService", "$http", "$rootScope"];

    angular.module(module).controller("transactionController", transactionController);

})(splitEatModule);
