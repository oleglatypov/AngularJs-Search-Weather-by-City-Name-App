/**
 * Created by oleglatypov on 5/18/16.
 */

//ROUTS
weatherApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'foreCastController'
        })
        .when('/forecast/:days', {
            templateUrl: 'pages/forecast.html',
            controller: 'foreCastController'
        })
});
