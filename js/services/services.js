/**
 * Created by oleglatypov on 5/18/16.
 */

// SERVICES
weatherApp.service('cityService', function () {
    this.city = 'New York, NY';
});

// CONNECTION API
weatherApp.service('weatherService', ['$resource', function ($resource) {
    this.GetWeather = function (city, days) {
        var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&units=metric&cnt='+ days +'&appid=8c5c3c672d99f12db87411c44c61ff5e');

        return weatherAPI.get();
    };


}]);
