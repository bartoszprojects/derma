   var my_app = angular.module('djangular-demo', ['ngTable','djng.urls','djng.forms','ngRoute', 'ngResource', 'ngSanitize',,'ui.select','infinite-scroll','angular.filter','countTo','ngAnimate','ngTouch','ui.bootstrap','chart.js','angular-cardflow','ui.grid','ui.router','rzModule','angular-loading-bar','chart.js']);


   my_app.config(function($httpProvider) {
    // $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    // $httpProvider.defaults.headers.common['X-CSRFToken'] = '{% csrf_value %}';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});





my_app.directive('next', function(){
    return{
       restrict: 'C',
       link: function(scope, element, attrs){
 element.on("click",function(){
    console.log("HAS BEEN CALLED")
    current_step = $(this).parent();
    next_step = $(this).parent().next();
    next_step.show();
    current_step.hide();
  })      
   }
    }
});

   my_app.directive('aDisabled', function() {
    return {
        compile: function(tElement, tAttrs, transclude) {
            //Disable ngClick
            tAttrs["ngClick"] = "!("+tAttrs["aDisabled"]+") && ("+tAttrs["ngClick"]+")";

            //return a link function
            return function (scope, iElement, iAttrs) {

                //Toggle "disabled" to class when aDisabled becomes true
                scope.$watch(iAttrs["aDisabled"], function(newValue) {
                    if (newValue !== undefined) {
                        iElement.toggleClass("disabled", newValue);
                    }
                });

                //Disable href on click
                iElement.on("click", function(e) {
                    if (scope.$eval(iAttrs["aDisabled"])) {
                        e.preventDefault();
                    }
                });
            };
        }
    };
});


my_app.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      var keys = Object.keys(props);

      items.forEach(function(item) {
        var itemMatches = false;

        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
});


  my_app.factory('breed_all_dog', function($resource) {
        return $resource(
            '/api/breeddata') });

  my_app.factory('breed_all_cat', function($resource) {
        return $resource(
            '/api/breedcatdata') });



  my_app.factory('breed', function($resource) {
        return $resource(
            '/api/breeddata/:id',
            {id: "@id" },
            {
                'breed_info': {
                    method: 'GET',
                    isArray: true,
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            },
            {
                stripTrailingSlashes: false
            }
        );

    });


  my_app.factory('petfood_zooplus_dog_filter', function($resource) {
        return $resource(
            '/api/petfooddogfilter?id_pet=:id_pet&presentation=:presentation&circuit=:circuit&specs=:specs&targeted_life_stage=:targeted_life_stage',
            {id_pet:"@id_pet",presentation:"@presentation",
            circuit:"@circuit",specs:"@specs",targeted_life_stage:"@targeted_life_stage"}
        );

    });

  my_app.factory('recipe_maker', function($resource) {
        return $resource(
            '/api/recipe?id_pet=:id_pet&id_prot=:id_prot&id_fat=:id_fat&id_greens=:id_greens&id_carbs=:id_carbs&voracious=:voracious&low_carb=:low_carb',
            {id_pet:"@id_pet",id_prot:"@id_prot",
            id_fat:"@id_fat",id_greens:"@id_greens",id_carbs:"@id_carbs",voracious:"@voracious",low_carb:"@low_carb"}
        );

    });


  my_app.factory('recipe_maker_derma', function($resource) {
        return $resource(
            '/api/recipe_derma?id_pet=:id_pet&voracious=:voracious&low_carb=:low_carb',
            {id_pet:"@id_pet",voracious:"@voracious",low_carb:"@low_carb"}
        );

    });


  my_app.factory('simulator_market_filter_dog', function($resource) {
        return $resource(
            '/api/simulator_market_filter_dog?protein=:protein&fat=:fat&cb=:cb&fb=:fb&moist=:moist&calcium=:calcium&phosphore=:phosphore&price=:price&specy=:specy&category=:category&sexual_capacity=:sexual_capacity&sexual_status=:sexual_status&status=:status&list_specs=:list_specs&list_brands=:list_brands',
            {protein:"@protein",fat:"@fat",cb:"@cb",fb:"@fb",moist:"@moist",calcium:"@calcium",phosphore:"@phosphore",price:"@price",specy:"@specy",category:"@category",sexual_capacity:"@sexual_capacity",sexual_status:"@sexual_status",status:"@status",list_specs:"@list_specs",list_brands:"@list_brands"}
        );

    });



  my_app.factory('petfood_zooplus_dog_filter', function($resource) {
        return $resource(
            '/api/petfooddogfilter?id_pet=:id_pet&presentation=:presentation&circuit=:circuit&specs=:specs&targeted_life_stage=:targeted_life_stage',
            {id_pet:"@id_pet",presentation:"@presentation",
            circuit:"@circuit",specs:"@specs",targeted_life_stage:"@targeted_life_stage"}
        );

    });




  my_app.factory('petfood_zooplus_cat_filter', function($resource) {
        return $resource(
            '/api/petfoodcatfilter?id_pet=:id_pet&presentation=:presentation&circuit=:circuit&specs=:specs&targeted_life_stage=:targeted_life_stage',
            {id_pet:"@id_pet",presentation:"@presentation",
            circuit:"@circuit",specs:"@specs",targeted_life_stage:"@targeted_life_stage"}
        );

    });





  my_app.factory('list_of_petfood_zooplus_dog_by_brand', function($resource) {
        return $resource(
            '/api/petfood_zooplus_dog?brand=:brand_name/',
            {brand: "@brand_name" }
        );

    });


  my_app.factory('list_of_petfood_zooplus_cat_by_brand', function($resource) {
        return $resource(
            '/api/petfood_zooplus_cat?brand=:brand_name/',
            {brand: "@brand_name" }
        );

    });



  my_app.factory('list_of_petfood_zooplus_dog', function($resource) {
        return $resource(
            '/api/petfood_zooplus_dog') });

  my_app.factory('list_of_petfood_zooplus_cat', function($resource) {
        return $resource(
            '/api/petfood_zooplus_cat') });


  my_app.factory('list_of_petfood_zooplus_dog_dry', function($resource) {
        return $resource(
            '/api/petfood_zooplus_dog?presentation=Dry') });

  my_app.factory('list_of_petfood_zooplus_dog_wet', function($resource) {
        return $resource(
            '/api/petfood_zooplus_dog?presentation=Wet') });

  my_app.factory('list_of_petfood_zooplus_cat_dry', function($resource) {
        return $resource(
            '/api/petfood_zooplus_cat?presentation=Dry') });

  my_app.factory('list_of_petfood_zooplus_cat_wet', function($resource) {
        return $resource(
            '/api/petfood_zooplus_cat?presentation=Wet') });


  my_app.factory('list_of_proteins', function($resource) {
        return $resource(
            '/api/natural_protein') });

  my_app.factory('list_of_fats', function($resource) {
        return $resource(
            '/api/natural_fat') });

  my_app.factory('list_of_carbs', function($resource) {
        return $resource(
            '/api/natural_carbs') });

  my_app.factory('list_of_legumes', function($resource) {
        return $resource(
            '/api/natural_legumes') });

  my_app.factory('list_of_mineral', function($resource) {
        return $resource(
            '/api/natural_mineral') });



  my_app.factory('list_of_pets', function($resource) {
        return $resource(
            '/api/petdata/') });


my_app.factory('pet_by_id', function($resource) {
  return $resource('/api/petdata/:id/', { id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
});

my_app.factory('pet_to_add', function($resource) {
  return $resource('/api/petdata', {
    post: {
      method: 'POST' // this method issues a PUT request
    }
  });
});



angular.module('djangular-demo')
        .controller('lateral-bar', function($scope, $http, $window,$filter,$uibModal,list_of_pets){
          $scope.list_of_pets_from_user = list_of_pets.query()



        });


