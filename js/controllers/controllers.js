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

weatherApp.controller('foreCastController',['$scope','$resource','$routeParams', 'cityService', function ($scope,$resource,$routeParams, cityService){
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    $scope.weatherAPI =
        $resource('http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.city+'&units=metric&cnt='+ $scope.days +'&appid=8c5c3c672d99f12db87411c44c61ff5e');
    $scope.weatherResult = $scope.weatherAPI.get();
    $scope.newDateFormat = function (time) {

        return new Date(time * 1000);

    };
    console.log($scope.weatherResult);

}]);