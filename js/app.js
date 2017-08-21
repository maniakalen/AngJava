var foodsApp = angular
    .module('foodsApp', [])
    .component('foodsListing', {
        templateUrl : 'templates/page.html',
        controller: function FoodsListingController() {
            this.foods = foods;
            this.categories = categories;
            this.categoryName = function(id) {
                var name = null;
                angular.forEach(categories, function(item) {
                    if (item.id === id) {
                        name = item.name;
                    }
                });
                return name;
            };
            var self = this;
            this.submitItem = function() {
                var id = this.newItem.id;
                if (id === 0) {
                    angular.forEach(this.foods, function (item) {
                        id = Math.max(id, item.id);
                    });
                    var item = {
                        "id": id + 1,
                        "name": this.newItem.name,
                        "category": parseInt(this.newItem.category)
                    };
                    this.foods.push(item);
                } else {
                    angular.forEach(this.foods, function(item) {
                        if (id === item.id) {
                            item.name = self.newItem.name;
                            item.category = parseInt(self.newItem.category);
                        }
                    });
                }
                this.newItem = {id:0,name:'',category:0};
            };
            this.removeItem = function(id) {
                angular.forEach(this.foods, function(item, k) {
                    if (item.id === id) {
                        self.foods.splice(k, 1);
                    }
                });
            };

            this.editItem = function(id) {

                angular.forEach(this.foods, function(item, k) {
                    if (item.id === id) {
                        self.newItem = JSON.parse(JSON.stringify(item));
                    }
                });
            }
        }
    });

