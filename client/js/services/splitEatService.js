app.service('usersService', function ($http) {
    this.getData = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:4000/user'
        }).success(function (data) {
            return data;
        }).error(function () {
            alert("error");
            return null;
        });
    };
});