(function () {
    angular.module('myApp')
        .controller('myCtrl', MyCtrl);

    MyCtrl.$inject = ['$scope', 'adxService'];

    function MyCtrl($scope, adxService) {
        $scope.content = "This is a test content";

        var promise = adxService.getData();

        promise.then(function(res){
            $scope.adxData = res.data;

        }).catch(function(error){
            console.log(error);
        })
    }
})();