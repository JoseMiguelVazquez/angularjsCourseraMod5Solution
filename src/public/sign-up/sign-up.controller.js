(function () {
    'use strict';

    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$scope', 'MenuService', 'UserService'];
    function SignUpController($scope, MenuService, UserService) {
        $scope.isItemValid = true;
        $scope.isSubmitted = false;
        $scope.submit = function () {
            if($scope.dishNumber){
                MenuService.getItem($scope.dishNumber)
                .then(function (response) {
                    if(response === null) {
                        $scope.isItemValid = false;
                    }
                    else {
                        $scope.isItemValid = true;
                        $scope.user.favoriteDish = response;
                        UserService.savePreferences($scope.user);
                        $scope.isSubmitted = true;
                        console.log(UserService.getPreferences());
                    }
                });
            }
        }

        $scope.onChange = function () {
            if($scope.dishNumber){
                MenuService.getItem($scope.dishNumber)
                .then(function (response) {
                    if(response === null) {
                        $scope.isItemValid = false;
                    }
                    else {
                        $scope.isItemValid = true;
                    }
                });
            }
        }
    }
    
})();