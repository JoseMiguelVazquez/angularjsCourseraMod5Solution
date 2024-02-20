(function () {
    'use strict';

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['$scope', 'userPreferences'];
    function MyInfoController($scope, userPreferences) {
        $scope.userPreferences = userPreferences;
        if(userPreferences.favoriteDish){
            $scope.category = userPreferences.favoriteDish.short_name.slice(0, userPreferences.favoriteDish.short_name.search(/\d/));
        }
    }
    
})();