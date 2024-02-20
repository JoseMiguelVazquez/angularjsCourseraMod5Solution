(function () {
    'use strict';

    angular.module('common')
    .service('MenuService', MenuService);


    MenuService.$inject = ['$http', 'ApiPath'];
    function MenuService ($http, ApiPath) {
        var service = this;

        service.getCategories = function () {
            return $http.get(ApiPath + '/categories.json').then(function (response) {
                return response.data;
            });
        };

        service.getMenuItems = function (category) {
            return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
                return response.data;
            });
        };

        service.getItem = function (itemShortName) {
            var category = itemShortName.slice(0, itemShortName.search(/\d/));
            var item = parseInt(itemShortName.replace(category, '')) - 1;
            return $http.get(ApiPath + '/menu_items/' + category + '/menu_items/' + item + '.json').then(function (response) {
                return response.data;
            });
        }
    }
})();