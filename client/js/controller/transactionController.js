app.controller("transactionController", ["$scope", "$mdDialog", "usersService", function ($scope, $mdDialog, usersService) {
    var vm = this;
    vm.username = null;
    vm.password = null;
    vm.descrption = null;
    vm.payee = null;
    vm.cost = null;

    vm.handleSubmit = handleSubmit;
    vm.handleCancel = handleCancel;

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
        }
        else {
            list.push(item);
        }
    };

    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
}]);