(function (module) {
    function usersService($http, $rootScope) {
        var self = this;
        this.initService = function () {
            self.userDetails = null;
            self.setData();
        };

        this.fetchData = function () {
            return $http({
                method: 'GET',
                url: 'https://7et6j1f4xi.execute-api.us-west-2.amazonaws.com/dev/getusers'
            }).success(function (data) {
                console.log(data);
                return data;
            }).error(function () {
                alert("error");
                return null;
            });
        };

        this.setData = function () {
            self.fetchData().then(function (response) {
                self.userDetails = response.data.Items;
                $rootScope.$broadcast("dataUpdated");
            });
        };
        this.getData = function () {
            return self.userDetails;
        };

        self.initService();
    }

    usersService.$inject = ['$http', '$rootScope'];
    angular.module(module).service("usersService", usersService);
})(splitEatModule);
