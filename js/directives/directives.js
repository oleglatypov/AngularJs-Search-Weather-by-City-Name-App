/**
 * Created by oleglatypov on 5/18/16.
 */

//DIRECTIVES
weatherApp.directive('searchData', function () {
    return {
        restrict: 'E',
        templateUrl: 'pages/templates/search-directive.html',
        replace: true,
        scope: {// put holes to isolated scope
            weatherDay: "=", // two way binding
            //convertToStandard: "&", //provides a way to execute an expression in the context of the parent scope
            convertToDate: "&", //provides a way to execute an expression in the context of the parent scope
            dateFormat: "@"// one way binding

        }
    }
});