my_app.directive('updateTitle', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function(scope, element) {

        var listener = function(event, toState) {

          var title = 'Default Title';
          if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

          $timeout(function() {
            element.text(title);
          }, 0, false);
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);



angular.module('djangular-demo').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // route to show our basic form (/form)
        .state('homemade', {
            url: '/homemade',
            templateUrl: "/static/data/angulartemplate/homemade/template.html",
            controller: 'HomemadeQuant_Ctrl'
        })

        .state('homemade.pet', {
            url: '/pet',
            data: {
                pageTitle: 'Select your pet'},
            templateUrl: "/static/data/angulartemplate/homemade/pet.html",
        //     controller: 'food_controller',
        //     resolve:{petfood:["list_of_petfood_zooplus_dog",function(list_of_petfood_zooplus_dog){
        //   return list_of_petfood_zooplus_dog.query();
        // }]}
  })

        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('homemade.protein', {
            url: '/protein',
            data: {
                pageTitle: 'Select a source of protein'},
            templateUrl: "/static/data/angulartemplate/homemade/protein.html",
            // controller: 'formController'

        })

        // url will be /form/interests
        .state('homemade.greens', {
            url: '/greens',
            templateUrl: "/static/data/angulartemplate/homemade/greens.html",
            // controller: 'formController',

        })

        // url will be /form/payment
        .state('homemade.fat', {
            url: '/fat',
            data: {
                pageTitle: 'Select a source of fat'},
            templateUrl: "/static/data/angulartemplate/homemade/fat.html",
        //     controller: 'food_controller',
        //     resolve:{petfood:["list_of_petfood_zooplus_dog",function(list_of_petfood_zooplus_dog){
        //   return list_of_petfood_zooplus_dog.query();
        // }]}
 })

        .state('homemade.carbs', {
            url: '/carbs',
            data: {
                pageTitle: 'Select a source of carbohydates'},
            templateUrl: "/static/data/angulartemplate/homemade/carbs.html",
        //     controller: 'food_controller',
        //     resolve:{petfood:["list_of_petfood_zooplus_dog",function(list_of_petfood_zooplus_dog){
        //   return list_of_petfood_zooplus_dog.query();
        // }]}
 })

        .state('homemade.details', {
            url: '/details',
            data: {
                pageTitle: 'Additionnal details'},
            templateUrl: "/static/data/angulartemplate/homemade/details.html",
        //     controller: 'food_controller',
        //     resolve:{petfood:["list_of_petfood_zooplus_dog",function(list_of_petfood_zooplus_dog){
        //   return list_of_petfood_zooplus_dog.query();
        // }]}
  })


         .state('homemade.details', {
            url: '/details',
            data: {
                pageTitle: 'Additionnal details'},
            templateUrl: "/static/data/angulartemplate/homemade/details.html",
        //     controller: 'food_controller',
        //     resolve:{petfood:["list_of_petfood_zooplus_dog",function(list_of_petfood_zooplus_dog){
        //   return list_of_petfood_zooplus_dog.query();
        // }]}
  })

          .state('homemade.result', {
            url: '/result',
            data: {
                pageTitle: "Let's cook!"},
            templateUrl: "/static/data/angulartemplate/homemade/result.html",
        //     controller: 'food_controller',
        //     resolve:{petfood:["list_of_petfood_zooplus_dog",function(list_of_petfood_zooplus_dog){
        //   return list_of_petfood_zooplus_dog.query();
        // }]}
 });



    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/homemade/pet');
})

angular.module('djangular-demo').controller('HomemadeQuant_Ctrl', function($scope, $http, $window,$filter,list_of_pets,list_of_mineral,list_of_legumes,list_of_carbs,list_of_fats,list_of_proteins,pet_by_id,recipe_maker) {

//Note : il faut toujours que le selected soit dans le même controller. Il est dépendant du controller. Donc tu peux pas aller chercher le selected d'un autre controller. Ca marche pas. C'est unr fonction intrinsèque du constorllr. 

//FAUT-IL gérer les retours en arrière 

$scope.list_of_pets_from_user = list_of_pets.query();
$scope.list_of_proteins = list_of_proteins.query();
$scope.displaying={"source":0,"show_details":false}

$scope.list_of_mineral=list_of_mineral.query()
$scope.list_of_legumes=list_of_legumes.query()
$scope.list_of_carbs=list_of_carbs.query()
$scope.list_of_fats=list_of_fats.query()

$scope.close=0;
$scope.show_collapse=0
$scope.expandedPet = null;



    // $scope.diet={"protein":"","greens":"","fat":"","mineral":"","carbs":""}

    $scope.diet=
      {"low_carb":'3',
        "voracious":'3',
        "date":moment(new Date()).format("YYYY-MM-DD"),
        "protein":{"name":'','quantity':'','img':''},
       "fat":{"name":'','quantity':'','img':''},
       "carbs":{"name":'','quantity':'','img':''},
       "greens":{"name":'','quantity':'','img':''},
       "mineral":[]
     
    };

    //Les gens ne doivent pas choisir mineral c'est pas raisonnable.  

$scope.displaying.show_details=false
$scope.pet_is_clicked = false;
    
    $scope.show_next_button_pet = function(){
      $scope.pet_is_clicked= true;  
    };

$scope.close=function(){
  $scope.close=1;
}

$scope.info_protein={"Title":"Ideal weight",
"Text":"Your pet's weight is one the easiest and objective data that you can gather on a regular basis to assess the adequation between your pet's lifestyle and metabolism.There are several illnesses associated with over/under weight conditions : diabete, arthrosis, urinary tract infection, . Following up with {{ cat.pet_name }}{{ dog.pet_name }}'s weight is the very first step to prevent those sickness. How does Smart-Nutrition knows what is your pet's ideal weight ? In 2013, the World Small Animals Veterinary Association (WSAVA)realesed paper in which they presented a body condition scoring system inspired by the early work of Dr Laflamme (<i> Development and validation of a body condition score system for dogs. Canine Pract 1997;22:10-15 </i>) in 1997 and validated with the most recent methods of non invasive fat mass measurement (e.g x-ray absorptiometry).This scoring system lays on 9 point scale and each point represents +/- 10 to 15% of the body mass.With the objective score from 1 to 9 (4 and 5 being ideal) you gave to your pet, we are able to determine the excess or the default of fat your pet. Simple maths :) ! " }

$scope.more_info = function (title,text) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal_are_you_sure',
      ariaDescribedBy: 'modal-body',
      templateUrl: "info_data.html",
      controller: function($scope) {
  $scope.title_modal=title
  $scope.text_modal=text

  
  $scope.ok = function() {
    modalInstance.close();
  };


  $scope.cancel = function() {
    modalInstance.dismiss('cancel');
  };

      },
      size: size,
      appendTo: parentElem,
      resolve: {
      }
    });


    modalInstance.result.then(function() {
      
    });

  };


$scope.class_choice=function(pet,selected){
     if(pet==selected){
            return "selected_pet"; }
     else if(pet!==selected && pet.gender=='1'){
         return "boy";}
     else if(pet!==selected && pet.gender=='2') {
         return "girl";}
    };



$scope.protein_is_clicked = false;
   
//Fonction qui fait des sommes//
$scope.sum = function(items, prop){
    return items.reduce( function(a, b){
        return a + b[prop];
    }, 0);
};
//


    $scope.show_next_button_protein = function(){
      $scope.protein_is_clicked= true;  
    };


$scope.legumes_is_clicked=false;

    $scope.show_next_button_legumes = function(){
      $scope.legumes_is_clicked= true;  
    };


$scope.fat_is_clicked=false;

    $scope.show_next_button_fat = function(){
      $scope.fat_is_clicked= true;  
    };


$scope.carbs_is_clicked=false;

    $scope.show_next_button_carbs = function(){
      $scope.carbs_is_clicked= true;  
    };




$scope.loadMore = function() {
   if ($scope.numberToDisplay + 5 < $scope.pet_food_brand.length) {
       $scope.numberToDisplay += 5;
   } else {
       $scope.numberToDisplay = $scope.pet_food_brand.length;
   }
};




$scope.set_pet_id = function(selected) {
  $scope.pet_data_selected=selected;
  console.log("PET",$scope.pet_data_selected);

  $scope.list_of_proteins = list_of_proteins.query();


 

};


$scope.set_protein_id = function(selected) {
  $scope.protein_selected=selected;
  console.log("PROT",$scope.protein_selected);
  $scope.diet.protein.name=$scope.protein_selected.title;
  $scope.diet.protein.img=$scope.protein_selected.img;

 
};


$scope.set_legumes_id = function(selected) {
  $scope.legumes_selected=selected;
  console.log("LEGUMES",$scope.legumes_selected);
  $scope.diet.greens.name=$scope.legumes_selected.title;
  $scope.diet.greens.img=$scope.legumes_selected.img;

 
};

$scope.set_fat_id = function(selected) {
  $scope.fat_selected=selected;
  console.log("FAT",$scope.fat_selected);
  $scope.diet.fat.name=$scope.fat_selected.title;
  $scope.diet.fat.img=$scope.fat_selected.img;

 
};


$scope.set_carbs_id = function(selected) {
  $scope.carbs_selected=selected;
  console.log("CARBS",$scope.carbs_selected);
  $scope.diet.carbs.name=$scope.carbs_selected.title;
  $scope.diet.carbs.img=$scope.carbs_selected.img;

 
};
$scope.data_to_grid=[]
$scope.gridOptions = {
      enableSorting: false,
      columnDefs: [
        { field: 'Product',displayName: "Ingredients", enableSorting: true },
        { field: 'Energy', displayName: "Energy (kcal)", enableSorting: true  },
        { field: 'Protein',displayName: "Protein (g)", enableSorting: true },
        { field: 'Fat',displayName: "Fat (g)", enableSorting: true  },
        { field: 'Carbohydrate',displayName: "Carbohydrate (g)", enableSorting: true  },
        { field: 'Calcium',displayName: "Calcium (g)", enableSorting: true  },
        { field: 'Phosphorus',displayName: "Phosphorus (g)", enableSorting: true  }
      ],
      data:$scope.data_to_grid
    };


$scope.save_diet_to_pet_data_retrieve_recipe = function() {

   var data = recipe_maker.query({id_pet:$scope.pet_data_selected.id,id_prot:$scope.protein_selected.id,id_fat:$scope.fat_selected.id,id_greens:$scope.legumes_selected.id,id_carbs:$scope.carbs_selected.id,voracious:$scope.diet.voracious,low_carb:$scope.diet.low_carb},function(callbackdata){
   //function is called on success
   $scope.recipe=callbackdata;
   console.log("$scopdata_t_grid=",$scope.data_to_grid)

   $scope.data_pie_chart=[];

   //Cette histoire de tableau qui doit être vidé à chaque fois là ! 


   angular.forEach(callbackdata, function(value, key){
          $scope.data_to_grid.push({
        'Product': value.title,
        'Quantity': value.quantity,
        'Energy': value.energy,
        'Protein': value.protein,
        'Fat': value.fat,
        'Carbohydrate': value.carbohydrate,
        'Calcium': value.calcium,
        'Phosphorus': value.phosphorus
    })

          $scope.data_pie_chart.push(value.energy_ratio);



});

          $scope.labels = ["Part of  the energy brought by Protein" , "Part of  the energy brought by Greens","Part of  the energy brought by Fat", "Part of the energy brought by Carbohydrates","Part of the energy brought by Minerals"];
          $scope.options_pie_chart={legend: {
            display: true}}


$scope.data_to_grid.push({
  'Product':'Total',
  'Quantity':$scope.sum($scope.recipe, 'quantity'),
  'Energy': $scope.sum($scope.recipe, 'energy'),
  'Protein': $scope.sum($scope.recipe, 'protein'),
  'Fat': $scope.sum($scope.recipe, 'fat'),
  'Carbohydrate': $scope.sum($scope.recipe, 'carbohydrate'),
  'Calcium': $scope.sum($scope.recipe, 'calcium'),
  'Phosphorus': $scope.sum($scope.recipe, 'phosphorus')




})

});


// Construisons le tableau 
     $scope.entry = pet_by_id.get({ id: $scope.pet_data_selected.id }, function() {
      console.log("KEYS=",Object.keys($scope.entry.home_made_diet));
      // JS ne classe par ordre alphabétique naturellement. Il faut donc rajouter une petite fonction dans le sort pour avoir ce qu'on veut. 

      var keys_ordered_old_to_new=(Object.keys($scope.entry.home_made_diet)).sort( function(a,b) { return a - b; } );
      console.log("KEY_ORDERED=",keys_ordered_old_to_new);

      if (keys_ordered_old_to_new.length==0) {
        var new_id_diet_string="0"
      }
      else {
        console.log("LAST_ID_DIET=",keys_ordered_old_to_new[keys_ordered_old_to_new.length-1]);
      var new_id_diet=parseFloat(keys_ordered_old_to_new[keys_ordered_old_to_new.length-1])+1
      var new_id_diet_string=new_id_diet.toString();
      console.log("NEW_ID_DIET=",new_id_diet_string);


      }


      console.log("PREVIOUS_DIET_LOG",$scope.entry.home_made_diet);
      $scope.entry.home_made_diet[new_id_diet_string]=$scope.diet;
      console.log("ADDED_DIET_LOG",$scope.entry.home_made_diet);

        $scope.entry.$update({id: $scope.pet_data_selected.id},function() {
            //updated in the backend
          });

        });  




 
};




//POUR LE EXPAND-WEIGHTLOGS//
  $scope.weight_logs_graphs = function (idx,pet) {
  var keys = [];
  $scope.show_collapse=1


  for(var k in pet.weight_logs) {
    keys.push(moment(k,"YYYY-MM-DD"));

  }

  var keys_ordered_old_to_new=$filter('orderBy')(keys)
//On est obligé d'ordonner pour pas que la graphe soit pas dans tous les sens. 
//On est obligé de convertir le string en date pour faire le sorting. 
  console.log("Sorted",keys_ordered_old_to_new);

  data_weight=[]
  labels_date=[]
  for (var i = 0; i < keys_ordered_old_to_new.length; i++) {
    data_weight.push(parseFloat(pet.weight_logs[keys_ordered_old_to_new[i].format("YYYY-MM-DD")]));
    labels_date.push(keys_ordered_old_to_new[i].format("YYYY-MM-DD"))
}
  console.log(data_weight);
  console.log("PET",pet);
  console.log("IDX",idx);

  $scope.pet_to_show_weight=pet
  $scope.labels = labels_date
  $scope.data = data_weight;
   $scope.weight_options= {
                        legend: {
            display: false},
                  scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: false,
                             labelString: 'Petfood'
            },
                       ticks: {
                           display: true
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: Math.round(1.1*(Math.max.apply(Math, $scope.data)) / 10) * 10
},                     scaleLabel: {
                        display: false,
                          labelString: 'Carbohydrates* (g/kcal)'
            }

}]},
                    responsive: true,
                    tooltips: {
    enabled: true,
    mode: 'single',
    callbacks: {
      label: function(tooltipItem, data) {
        var label = data.labels[tooltipItem.index];
        var datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
        return datasetLabel + " Kg";
      }
    }
  },
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }


////// DATE_PICKER MATERIAL //////
  $scope.today = function() {
    $scope.pet_to_show_weight.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.pet_to_show_weight.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    maxDate: new Date(),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();


  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.pet_to_show_weight.dt = new Date(year, month, day);
  };

  $scope.formats = ['yyyy-MM-dd', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }

//// DATE PICKER END OF MATERIAL ///// 

};
  $scope.update_weight = function(pet) {
    console.log("IN")
    //Juste pour que le collapse se referme une fois le weight added
    //Et un collapse évite d'afficher trop de data d'un seul et même coup ! 
    $scope.status = {
    open:false  };




    //L'update se fait bien. L'affichage aussi. Il faut faire un système de blocage = 1 fois par jour. Ou alors ajouter la possibilité de date.
    // Autr : pet ne se met pas à jour en arrière cour. Maintenant si avec restults. 
    // Il faut checker que la date ne soit pas déjà dedans.

    //Le datePICKER te sort une date qu'il faut convertir en moment et qu'ensuite tu peux faire repasser en string) 
    console.log("New_weight",$scope.pet_to_show_weight.new_weight);
    console.log("Date",moment($scope.pet_to_show_weight.dt).format("YYYY-MM-DD"));
    $scope.pet_to_show_weight.dt=moment($scope.pet_to_show_weight.dt)
    //0 : we need to know if the date already exists => En fait ça sert à rien, car il le fait déjà tout seul. On pourrait éventuellement dire "vous avez déjà rentré pour cette date, are you sure you want to continue"
    // if($scope.labels.indexOf($scope.pet_to_show_weight.dt) == -1) {
    //     console.log("La date existe déjà");

    //   }


    //1st : we inject the new weight and the date, but we must make sure it's not already in it. 
    // Il faut pousser le couple (date,weight) dans pet.weight_logs car il n'a pas été touché là. 
    $scope.pet_to_show_weight.weight_logs[$scope.pet_to_show_weight.dt.format("YYYY-MM-DD")]= $scope.pet_to_show_weight.new_weight.toString();

  
  var keys = [];

  for(var k in $scope.pet_to_show_weight.weight_logs) {
    keys.push(moment(k,"YYYY-MM-DD"));

  }

  var keys_ordered_old_to_new=$filter('orderBy')(keys)
//On est obligé d'ordonner pour pas que la graphe soit dans tous les sens. 
//On est obligé de convertir le string en date pour faire la conversion. 
  console.log("Sorted",keys_ordered_old_to_new);

  data_weight=[]
  labels_date=[]
  for (var i = 0; i < keys_ordered_old_to_new.length; i++) {
    data_weight.push(parseFloat($scope.pet_to_show_weight.weight_logs[keys_ordered_old_to_new[i].format("YYYY-MM-DD")]));
    labels_date.push(keys_ordered_old_to_new[i].format("YYYY-MM-DD"))
}

  $scope.labels = labels_date
  $scope.data = data_weight;

    //2nd : we save to the weight_logs.
    $scope.entry = pet_by_id.get({ id: pet.id }, function() {
          // $scope.entry is fetched from server and is an instance of Entry
        var last_date_updated_weight=$scope.labels[($scope.labels.length)-1];

        $scope.entry.weight = parseFloat($scope.pet_to_show_weight.weight_logs[last_date_updated_weight]);

      //ATTENTION,IL FAUT QUE CE SOIT LE PLUS RECENT DES DATE DU JSON QUI DONNE LE TRUC et pas forcément le dernier ajouté.On va donc prendre la dernière date de la liste ordonné 

        $scope.entry.weight_logs[$scope.pet_to_show_weight.dt.format("YYYY-MM-DD")]= $scope.pet_to_show_weight.new_weight.toString();
        console.log("JSON_AFTER=",$scope.entry.weight_logs);
        $scope.entry.$update({id: $scope.entry.id},function() {
          console.log("updating en cours")

            //updated in the backend
          });
        });  






  };

  $scope.closeAlert = function() {
    $scope.alerts.splice();
  };


  $scope.manageCollapseExpand = function(obj, isCity) {
    obj.expanded = !obj.expanded;
    if (obj !== $scope.expandedPet && obj !== obj.expanded) {
      $scope.collapseExpanded(isCity);
    }
    if (obj.expanded) {
      if (isCity) {
      } else {
        $scope.expandedPet = obj;
      }
    }
  };

  $scope.collapseExpanded = function(clickedOnCity) {
    if (!clickedOnCity && $scope.expandedPet !== null) {
      $scope.expandedPet.expanded = false;
    }
  };

//END-EXPAND-WEIGHT LOGS//



  $scope.askDelete = function (idx,pet,size,parentSelector) {
  console.log("PET",pet);
  console.log("IDX",idx);
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal_are_you_sure',
      ariaDescribedBy: 'modal-body',
      templateUrl: "myModalContent_delete.html",
      controller: function($scope) {
  $scope.pet_to_be_deleted=pet
  
  $scope.ok = function() {
    modalInstance.close();
  };


  $scope.cancel = function() {
    modalInstance.dismiss('cancel');
  };

      },
      size: size,
      appendTo: parentElem,
      resolve: {
      }
    });


    modalInstance.result.then(function() {
        $scope.entry = pet_by_id.get({ id: pet.id }, function() {
          // $scope.entry is fetched from server and is an instance of Entry
        $scope.entry.display = 0;
        $scope.entry.$update({id: $scope.entry.id},function() {
            //updated in the backend
          });
        });  

      reallyDelete(pet);
    });

  };

    var reallyDelete = function(pet) {
//Remove from frontend just deleting the item with the 
    $scope.list_of_pets_from_user.splice($scope.list_of_pets_from_user.indexOf(pet),1);  };




});