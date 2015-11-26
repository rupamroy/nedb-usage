(function () {
    angular.module('myApp')
        .controller('myCtrl', MyCtrl);

    MyCtrl.$inject = ['$scope', 'adxService'];


    function MyCtrl($scope, adxService) {
        $scope.gridOptions = {
            enableSorting: true,
            columnDefs: [
                {name: 'Id', field: '_id'},
                {name: 'Data', field: 'data'},
                {name: 'Time', field: 'time', cellFilter: 'date:\'yyyy-MM-dd hh:mm:ss a\''}
            ],
            enableGridMenu: true,
            enableSelectAll: true,
            exporterCsvFilename: 'myFile.csv',
            exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
            }
        };

        var promise = adxService.getData();

        promise.then(function (res) {
            changeDate(res.data);
            $scope.gridOptions.data = res.data;

        }).catch(function (error) {
            console.log(error);
        });

        $scope.find = function () {
            var proFind = adxService.findByDateTime($scope.fromTime, $scope.toTime);

            proFind.then(function (res) {
                changeDate(res.data);
                $scope.gridOptions.data = res.data;

            }).catch(function (error) {
                console.log(error);
            });
        };


        //Private Methods
        function changeDate(data) {
            var d, temp, i, len;

            for (i = 0, len = data.length; i < len; i++) {
                d = data[i];
                temp = new Date(d.time);
                d.time = temp.toLocaleDateString() + ' ' + temp.toLocaleTimeString();
            }
        }
    }
})();