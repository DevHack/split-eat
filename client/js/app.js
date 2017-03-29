var app = angular.module('SplitEatApp', ['ngMaterial', 'ngMdIcons']);

app.config(function ($mdThemingProvider, $mdDateLocaleProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('grey', {
            "default": '900'
        })
        .accentPalette('blue', {
            "default": "900"
        });
    $mdDateLocaleProvider.formatDate = function (date) {
        return moment(date).format('YYYY-MM-DD');
    };
});


