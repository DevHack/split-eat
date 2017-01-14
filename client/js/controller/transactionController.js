app.controller("transactionController", ["$scope", "$mdDialog", "usersService", "$http", "$rootScope", function ($scope, $mdDialog, usersService, $http, $rootScope) {
    var self = this;
    $scope.username = null;
    $scope.password = null;
    $scope.descrption = null;
    $scope.payee = null;
    $scope.cost = null;
    $scope.payee = null;
    $scope.participents = null;
    //$scope.myDate = null;

    $scope.handleSubmit = handleSubmit;
    $scope.handleCancel = handleCancel;

    function handleSubmit() {
        return $mdDialog.hide();
    }

    function handleCancel() {
        return $mdDialog.hide();
    }

    $scope.init = function () {
        $scope.items = null;
        usersService.getData().then(function (response) {
            $scope.items = response;
        });
    };
    $scope.init();
    $scope.selected = [];

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

    $scope.addTransacion = function () {
        var config = {
            headers: {
                'Content-Type': undefined
            }
        }
        $scope.payee = self.getPayee("payee");
        $scope.participents = self.getPayee("participants");
        var transactionObj = {
            "description": $scope.descrption,
            "cost": parseInt($scope.cost, 10),
            "payee": $scope.payee,
            "transactionDate": $scope.myDate.toString(),
            "participants": $scope.participents
        };
        // var data = $.param({
        //     descrption: $scope.descrption,
        //     cost: $scope.cost,
        //     payee: $scope.payee,
        //     transactionDate: $scope.myDate.toString(),
        //     participents: $scope.participents
        // });
        //console.log(data);
        $http({
            url: "http://localhost:4000/saveTransaction/1",
            method: "POST",
            data: transactionObj,
            config: config
        }).success(function (data) {
            $rootScope.$broadcast("dataUpdated");
            return data;
        }).error(function () {
            alert("error");
            return null;
        });
    };
    $scope.isAllSelected = function () {

    };
    self.getPayee = function (type) {
        // var arr,
        //     itemCopy = $scope.items;
        return ($scope.items.data.map(function (elem, index) {
            if (elem[type]) {
                return index + 1;
            }
        }).filter(function (item) {
            return typeof item === 'number';
        }));
        //return arr;
    };

}]);