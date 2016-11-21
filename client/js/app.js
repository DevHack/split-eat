var app = angular.module('SplitEatApp', ['ngMaterial', 'ngMdIcons']);

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('grey', {
            "default": '900'
        })
        .accentPalette('blue', {
            "default": "900"
        })
});


