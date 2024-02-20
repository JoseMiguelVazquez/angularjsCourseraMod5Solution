(function () {
    'use strict';

    angular.module('common')
    .service('UserService', UserService);


    function UserService () {
        var service = this;
        service.userPreferences = {}

        service.savePreferences = function (user) {
            service.userPreferences = user;
        }
        
        service.getPreferences = function () {
            return service.userPreferences;
        }
    }
})();