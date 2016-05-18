/**
 * Created by oleglatypov on 5/18/16.
 */

// CONTROLLERS
weatherApp.controller('mainController',['$scope','$location', 'cityService', function ($scope,$location, cityService){
    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

    $scope.submit = function () {
        $location.path("/forecast");
    };
}]);

weatherApp.controller('foreCastController',['$scope','$routeParams', 'cityService','weatherService', function ($scope,$routeParams, cityService, weatherService){
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';

    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

    $scope.newDateFormat = function (time) {
        return new Date(time * 1000);
    };
    console.log($scope.weatherResult);

}]);