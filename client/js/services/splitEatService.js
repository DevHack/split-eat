app.service('usersService', function ($http) {
    this.getData = function () {
        return $http({
            method: 'GET',
            url: 'data/user-details.json'
        }).success(function (data) {
            return data;
        }).error(function () {
            alert("error");
            return null;
        });
    };
});