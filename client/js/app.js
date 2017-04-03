var splitEatModule = 'SplitEatApp';
angular.module(splitEatModule, ['ngMaterial', 'ngMdIcons'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey', {
                "default": '900'
            })
            .accentPalette('blue', {
                "default": "900"
            });
    }).filter('unsafe', function ($sce) {
    return $sce.trustAsHtml;
});


