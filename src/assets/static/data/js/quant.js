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
        .state('food_quant', {
            url: '/food_quant',
            templateUrl: "/static/data/angulartemplate/food_quant/template.html",
            controller: 'FoodQuant_Ctrl'
        })

        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('food_quant.pet', {
            url: '/pet',
            data: {
                pageTitle: 'Select your pet'},
            templateUrl: "/static/data/angulartemplate/food_quant/pet.html",

        })


        .state('food_quant.food', {
            url: '/food',
            data: {
                pageTitle: 'Select the petfood'},
            templateUrl: "/static/data/angulartemplate/food_quant/food.html",

        })

        .state('food_quant.result', {
            url: '/result',
            data: {
                pageTitle: 'Result'},
            templateUrl: "/static/data/angulartemplate/food_quant/result.html",

        })



    $urlRouterProvider.otherwise('/food_quant/pet');


        });





angular.module('djangular-demo')
.controller('FoodQuant_Ctrl', function($scope, $http, $window,$filter,breed,list_of_pets,list_of_petfood_zooplus_dog,list_of_petfood_zooplus_dog,list_of_petfood_zooplus_cat,list_of_petfood_zooplus_dog_by_brand,list_of_petfood_zooplus_cat_by_brand,$uibModal) {
  



$scope.list_of_pets_from_user = list_of_pets.query();

$scope.searchTerm = "";
$scope.search_local={presentation:'',name:''};
$scope.logEvents="";
$scope.pet_food_brand="";
$scope.close=0;


$scope.search_is_enable=function(){
  $scope.enable_search=1;
}

$scope.close=function(){
  $scope.close=1;
}




$scope.class_choice=function(pet,selected){
     if(pet==selected){
            return "selected_pet"; }
     else if(pet!==selected && pet.gender=='1'){
         return "boy";}
     else if(pet!==selected && pet.gender=='2') {
         return "girl";}
    };


$scope.pet_is_clicked = false;
    
    $scope.show_next_button_pet = function(){
      $scope.pet_is_clicked= true;  
    };


$scope.food_is_clicked = false;
    
    $scope.show_next_button_food = function(){
      $scope.food_is_clicked= true;  
    };


// Pour l'instant logEvents permet juste de charger toutes les marques. Je pense que c'est peut être exagéré ? Sauf qu'il charge toutes les croquettes pour en extraire les croquettes ? 

$scope.loadMore = function() {
   if ($scope.numberToDisplay + 5 < $scope.pet_food_brand.length) {
       $scope.numberToDisplay += 5;
   } else {
       $scope.numberToDisplay = $scope.pet_food_brand.length;
   }
};




$scope.set_pet_id = function(selected) {

  $scope.enable_search=0
  // Pour re-initialiser la recherche à chaque fois
  $scope.pet_data_selected=selected;
    console.log("SELECTED=",$scope.pet_data_selected);

  console.log("PET",$scope.pet_data_selected);
  if ($scope.pet_data_selected.specy=="1"){
       $scope.list_of_petfood = list_of_petfood_zooplus_dog.query();
  
      console.log("DONE_1");

}

  if ($scope.pet_data_selected.specy=="2"){
       $scope.list_of_petfood = list_of_petfood_zooplus_cat.query();
       console.log("DONE_2");


          }

  $scope.logEvents = $scope.list_of_petfood;

 

};


$scope.calculus_food_quantity = function(selected) {
     //là on injecte dans un scope le selected food
     // On fait un résumé pet+food+quantity (quels infos) pour stockage
     // il faut pas convertir energy pet car c'est déjà un float

  $scope.food_selected=selected;
  console.log("PET_BEFORE_CALC=",$scope.pet_data_selected);
  console.log("FOOD=",$scope.food_selected);
  console.log("ENERGY_FOOD_beforeparse=",$scope.food_selected.energy);
  console.log("ENERGY_FOOD=",parseFloat($scope.food_selected.energy));
  console.log("ENERGY_PET=",$scope.pet_data_selected.getCALCULUS[0]);



  $scope.pet_data_selected.food_quantity=Math.round(100*($scope.pet_data_selected.getCALCULUS["ER_tot"])/parseFloat($scope.food_selected.energy));
  console.log("GRAMME_PET=",$scope.pet_data_selected.food_quantity);


};




$scope.onSelectCallback = function(item, model) {

        console.log(item.brand);
        if ($scope.pet_data_selected.specy==1){
        var data = list_of_petfood_zooplus_dog_by_brand.query({'brand': item.brand },function(callbackdata){
   //function is called on success
   $scope.pet_food_brand=callbackdata;
   console.log("BRAND_PETFOOD=",$scope.pet_food_brand);
  $scope.numberToDisplay = 15;



});
}

        if ($scope.pet_data_selected.specy==2){
        var data = list_of_petfood_zooplus_cat_by_brand.query({'brand': item.brand },function(callbackdata){
   //function is called on success
   $scope.pet_food_brand=callbackdata;
   console.log("BRAND_PETFOOD=",$scope.pet_food_brand);
  $scope.numberToDisplay = 15;



});
}


};

///MATERIEL POUR GERER LES PETS - ANNEXE

$scope.show_collapse=0

  $scope.expandedPet = null;


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
