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
        .state('switch', {
            url: '/switch',
            templateUrl: "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/angulartemplate/switcher/template.html",
            controller: 'SwitchController'
        })

        .state('switch.pet', {
            url: '/pet',
            data: {
                pageTitle: 'Select your pet'},
            templateUrl: "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/angulartemplate/switcher/pet.html",
        //     controller: 'food_controller',
        //     resolve:{petfood:["list_of_petfood_zooplus_dog",function(list_of_petfood_zooplus_dog){
        //   return list_of_petfood_zooplus_dog.query();
        // }]}
  })

        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('switch.food1', {
            url: '/food1',
            data: {
                pageTitle: 'Select the original petfood : A'},
            templateUrl: "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/angulartemplate/switcher/food1.html",
            // controller: 'formController'

        })

        // url will be /form/interests
        .state('switch.food2', {
            url: '/food2',
            data: {
                pageTitle: 'Select the new petfood : B'},
            templateUrl: "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/angulartemplate/switcher/food2.html",
            // controller: 'formController',

        })

        // url will be /form/payment
        .state('switch.result', {
            url: '/result',
            data: {
                pageTitle: 'Transition Plan ! '},
            templateUrl: "https://s3-us-west-2.amazonaws.com/smart-nutrition/data/angulartemplate/switcher/result.html",
        //     controller: 'food_controller',
        //     resolve:{petfood:["list_of_petfood_zooplus_dog",function(list_of_petfood_zooplus_dog){
        //   return list_of_petfood_zooplus_dog.query();
        // }]}
  });

    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/switch/pet');
})

angular.module('djangular-demo')
        .controller('SwitchController', function($scope, $http, $window,$filter,list_of_pets,pet_by_id,list_of_petfood_zooplus_dog,list_of_petfood_zooplus_cat,list_of_petfood_zooplus_dog_by_brand,list_of_petfood_zooplus_cat_by_brand,$uibModal){

    $scope.list_of_pets_from_user = list_of_pets.query()

$scope.searchTerm = "";
$scope.search_local={presentation:'',name:''};
$scope.logEvents="";
$scope.pet_food_brand="";
$scope.close=0;
$scope.show_collapse=0
$scope.expandedPet = null;
$scope.formData={}
$scope.formData.old_food=''
$scope.is_clicked=false

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



$scope.reset_search_petfood = function() {
$scope.searchTerm = "";
$scope.search_local={presentation:'',name:''};
$scope.pet_food_brand="";
};


$scope.loadMore = function() {
   if ($scope.numberToDisplay + 5 < $scope.pet_food_brand.length) {
       $scope.numberToDisplay += 5;
   } else {
       $scope.numberToDisplay = $scope.pet_food_brand.length;
   }
};



$scope.set_pet_id = function(selected) {
  $scope.enable_search=0  
  $scope.is_clicked=false

  $scope.pet_data_selected=selected;
  console.log("PET",$scope.pet_data_selected);

  if ($scope.pet_data_selected.specy=="1"){
       $scope.list_of_petfood = list_of_petfood_zooplus_dog.query();
  
      console.log("DONE_1",$scope.list_of_petfood.length);

}

  if ($scope.pet_data_selected.specy=="2"){
       $scope.list_of_petfood = list_of_petfood_zooplus_cat.query();
       console.log("DONE_2",$scope.list_of_petfood.length);


          }

  $scope.logEvents = $scope.list_of_petfood;

    
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



$scope.calculus_transition=function() {
  //Ca ne marche qu'avec Achille les autres n'ont pas energy dans food.
    data_for_table=[];
    er_smart_nutrition=$scope.pet_data_selected.getCALCULUS[0];

    //On assigne old_food au choix de l'utilisateur ou au vieux .food du questionnaire initial.
    if ($scope.formData.update=='0'){        
        console.log("Cas avec update")
        console.log("ER_SM=",er_smart_nutrition)
    }


    if ($scope.formData.update=='1'){
        console.log("Cas sans update")
        $scope.formData.old_food=angular.copy($scope.pet_data_selected.food.initial);
    }


    console.log("formData=",$scope.formData.old_food)

    er_guessed=parseFloat($scope.formData.old_food.quantity)*parseFloat($scope.formData.old_food.energy)/100


    for (var i=1; i<=$scope.formData.number_days; i++) {
        fraction_new=parseFloat(i)/parseFloat($scope.formData.number_days)
        console.log("Fraction=",fraction_new)
        fraction_old=1-fraction_new

        er_new=er_guessed*fraction_new
        er_old=er_guessed-er_new

        quantity_new=Math.round(100*er_new/parseFloat($scope.formData.new_food.energy))

        quantity_old=Math.round(100*er_old/parseFloat($scope.formData.old_food.energy))


        data_for_table.push({"Day":"Day "+i, "Quantity_Old":quantity_old+" g", "Quantity_New":quantity_new+" g"})
 };

  $scope.gridOptions = {
    enableSorting: false,
    columnDefs: [
      { field: 'Day', displayName: "Day", enableSorting: false },
      { field: 'Quantity_Old', displayName: $scope.formData.old_food.name , enableSorting: false  },
      { field: 'Quantity_New',displayName: $scope.formData.new_food.name, enableSorting: false },
    ]
  };


  $scope.gridOptions.data = data_for_table;


   
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
