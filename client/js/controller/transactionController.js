app.controller("transactionController", ["$scope", "$mdDialog", "usersService", "$http", "$rootScope", function ($scope, $mdDialog, usersService, $http, $rootScope) {
    var self = this;

    //$scope.myDate = null;

    $scope.init = function () {
        $scope.username = null;
        $scope.password = null;
        $scope.descrption = null;
        $scope.payee = null;
        $scope.cost = null;
        $scope.payee = null;
        $scope.participents = null;
        $scope.selected = [];
        $scope.items = usersService.getData();
    };

    $scope.closeDialog = function () {
        $mdDialog.hide();
    };

    $scope.addTransacion = function () {
        self.getPayee();
        // var config = {
        //     headers: {
        //         'Content-Type': undefined
        //     }
        // };
        // $scope.payee = self.getPayee("payee");
        // $scope.participents = self.getPayee("participants");
        // var transactionObj = {
        //     "description": $scope.descrption,
        //     "cost": parseInt($scope.cost, 10),
        //     "payee": $scope.payee,
        //     "transactionDate": $scope.myDate.toString(),
        //     "participants": $scope.participents
        // };
        // $http({
        //     url: "http://localhost:4000/saveTransaction/1",
        //     method: "POST",
        //     data: transactionObj,
        //     config: config
        // }).success(function (data) {
        //     $rootScope.$broadcast("dataUpdated");
        //     return data;
        // }).error(function () {
        //     alert("error");
        //     return null;
        // });
        $scope.closeDialog();
    };

    self.getPayee = function (type) {
        console.log($scope.items);
        // var a =($scope.items.map(function (elem, index) {
        //     if (elem[type]) {
        //         return index + 1;
        //     }
        // }).filter(function (item) {
        //     return typeof item === 'number';
        // }));
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

    $scope.init();

}]);