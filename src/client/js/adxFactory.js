angular.module('myApp')
    .factory('adxService', function ($http) {
        return {
            getData: getData
        };


        function getData() {
            return $http.get('/index');
        }


    });
