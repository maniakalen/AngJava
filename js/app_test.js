describe('foodsApp', function() {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('foodsApp'));

    // Test the controller
    describe('FoodsListingController', function() {

        it('should create a `foods` model with 10 foods', inject(function($componentController) {
            var ctrl = $componentController('foodsListing');

            expect(ctrl.foods.length).toBe(10);
        }));

    });

});