(function(){
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.items = "";
        $scope.message = "";
        $scope.checkItems = function(){
            var ar = $scope.items.split(',')
            var len = ar.length;

            if(len<=3){
                $scope.message = "Enjoy!";
            }
            else{
                $scope.message = "Too much!";
            }
        };
    }
})()