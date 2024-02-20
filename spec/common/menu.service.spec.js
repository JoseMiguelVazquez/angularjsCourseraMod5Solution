describe('Menu Service', function () {
    'use strict';

    var menuService;
    var $httpBackend;
    var ApiBasePath;

    var testData = {
        menuItem: {
            description: "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
            large_portion_name: "quart",
            name: "Won Ton Soup with Chicken",
            price_large: 5,
            price_small: 2.55,
            short_name: "A1",
            small_portion_name: "pint"
        }
    }

    beforeEach(function () {
        module('common');

        inject(function ($injector) {
            menuService = $injector.get('MenuService');
            $httpBackend = $injector.get('$httpBackend');
            ApiBasePath = $injector.get('ApiPath')
        });
    });

    it('should return null when passing an invalid menu number', function() {
        var shortName = 'A35'
        $httpBackend.whenGET(ApiBasePath+ '/menu_items/A/menu_items/34.json').respond(null);
        menuService.getItem(shortName).then(function(response){
            expect(response).toEqual(null);
        });
        $httpBackend.flush();
    });

    it('should retrieve a menu item when passing its short name ', function() {
        var shortName = 'A1'
        $httpBackend.whenGET(ApiBasePath+ '/menu_items/A/menu_items/0.json').respond(testData.menuItem);
        menuService.getItem(shortName).then(function (response) {
            expect(response).toEqual(testData.menuItem);
        });
        $httpBackend.flush();
    });
});