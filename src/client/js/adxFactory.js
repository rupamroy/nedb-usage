angular.module('myApp')
    .factory('adxService', function ($http) {
        return {
            getData: getData,
            findByDateTime: findByDateTime
        };


        function getData() {
            return $http.get('/index');
        }

        function findByDateTime(from, to) {
            return $http.post('/find', {
                fromTime: from,
                toTime: to
            });
        }

    });
