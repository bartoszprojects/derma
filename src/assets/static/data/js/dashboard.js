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
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: "/static/data/angulartemplate/dashboard/template.html",

            controller: 'Dashboard_Ctrl'
        })

        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('dashboard.pet', {
            url: '/pet',
            data: {
                pageTitle: 'Select your pet'},

            templateUrl: "/static/data/angulartemplate/dashboard/pet.html",

        })


        .state('dashboard.pet_details', {
            url: '/pet_details',
            data: {
                pageTitle: 'Your pet nutritional details'},
            templateUrl: "/static/data/angulartemplate/dashboard/pet_details.html",

        })



    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/dashboard/pet');


        });





angular.module('djangular-demo')
.controller('Dashboard_Ctrl', function($scope, $http, $window,$filter,breed,list_of_pets,list_of_petfood_zooplus_dog,list_of_petfood_zooplus_dog,list_of_petfood_zooplus_cat,list_of_petfood_zooplus_dog_by_brand,petfood_zooplus_dog_filter,petfood_zooplus_cat_filter,list_of_pets,pet_by_id,$uibModal) {

//Note : il faut toujours que le selected soit dans le même controller. Il est dépendant du controller. Donc tu peux pas aller chercher le selected d'un autre controller. Ca marche pas. C'est unr fonction intrinsèque du constorllr. 


$scope.list_of_pets_from_user = list_of_pets.query();
$scope.update={'new_weight':'','new_date':'','new_fat_score':''}

$scope.class_choice=function(pet,selected){
     if(pet==selected && selected.is_sick=='0'){
            return "selected_pet";}
     if(pet==selected && selected.is_sick=='1'){
            return "selected_pet_sick";}
     else if(pet!==selected && pet.gender=='1'){
         return "boy";}
     else if(pet!==selected && pet.gender=='2') {
         return "girl";}
    };

$scope.pet_is_clicked = false;
    
    $scope.show_next_button_pet = function(pet){
      if (pet.is_sick=='0')
      {$scope.pet_is_clicked= true;}
      else 
        { $scope.pet_is_clicked = false;
}

          };

// Pour l'instant logEvents permet juste de charger toutes les marques. Je pense que c'est peut être exagéré ? Sauf qu'il charge toutes les croquettes pour en extraire les croquettes ? 

$scope.set_pet_id = function(selected) {
  $scope.pet_data_selected=selected;
  $scope.pet_data_selected.food.estimated_quantity=Math.round(100*($scope.pet_data_selected.getCALCULUS["ER_tot"])/parseFloat($scope.pet_data_selected.food.initial.energy));

  console.log("Energy_FOOD=",$scope.pet_data_selected.food.initial.energy)
  console.log("Energy_PET=",$scope.pet_data_selected.getCALCULUS["ER_tot"])
  console.log("Result_calculus=",$scope.pet_data_selected.food.estimated_quantity)
  console.log("SELECTED=",$scope.pet_data_selected);


    if ($scope.pet_data_selected.specy==1){
          $scope.list_status=[
          {name:'Puppy_Unweaned',display:'Unweaned'},
          {name:'Puppy_Post_Weaning_Pre_Peak',display:'Growthing Weaned Puppy before the peak of growth'},
          {name:'Puppy_Post_Weaning_Post_Peak',display:'Growthing Weaned Puppy after the peak of growth'},
          {name:'Adult',display:'Adult'},
          {name:'Senior',display:'Senior'}]
          $scope.list_specs=[
          {name:'Neutered',display:'Sprayed/Neutered'},
          {name:'Weight Management',display:'Weight Management'},
          {name:'Exigent',display:'Small Apetite'},
          {name:'Lactation',display:'Lactation'},
          {name:'Gestation',display:'Gestation'},
          {name:'Intestinal Sensitivity',display:'Intestinal Sensitivity'},
          {name:'Skin Sensitivity',display:'Skin Sensitivity'},
          {name:'Stress',display:'Stress'},
          {name:'Joint',display:'Joint'},
          {name:'Oral_Care',display:'Dental Hygiene'},
          {name:'Active Dog',display:'Active Dog'},
          {name:'Grain Free',display:'Grain Free'},
          {name:'Cold Pressed',display:'Cold Pressed'},
          {name:'Gluten Free',display:'Gluten Free'},
          {name:'Organic',display:'Organic'},
          {name:'Vegetarien',display:'Vegetarien'},
          {name:'Growth_post_weaning',display:'Growth Post Weaning'},
          {name:'Growth_pre_weaning',display:'Growth Pre Weaning'}

          ];
};

//Pas la peine de faire de reprise sur le serializer chez le chat car je donne déjà les informations sans post peak et sans pre-peak
    if ($scope.pet_data_selected.specy==2){
          $scope.list_status=[{name:'Kitty_Pre_Weaning',display:'Unweaned kitten'},{name:'Kitty_Post_Weaning',display:'Growthing Weaned kitten'},{name:'Adult',display:'Adult'},{name:'Senior',display:'Senior'}]

          $scope.list_specs=[{name:'Neutered',display:'Sprayed/Neutered'},{name:'Weight Management',display:'Weight Management'},{name:'Exigent',display:'Small Apetite'},{name:'Lactation',display:'Lactation'},{name:'Gestation',display:'Gestation'},{name:'Intestinal Sensitivity',display:'Intestinal Sensitivity'},{name:'Skin Sensitivity',display:'Skin Sensitivity'},{name:'Stress',display:'Stress'},{name:'Joint',display:'Joint'},{name:'Dental Hygiene',display:'Dental Hygiene'},{name:'Hair Ball',display:'Hair Ball'},{name:'Outdoor Cat',display:'Outdoor Cat'},{name:'Indoor Cat',display:'Indoor Cat'},{name:'Grain Free',display:'Grain Free'},{name:'Gluten Free',display:'Gluten Free'},{name:'Organic',display:'Organic'},{name:'Growth_post_weaning',display:'Growth Post Weaning'},{name:'Growth_pre_weaning',display:'Growth Pre Weaning'}
]
};


// POUR LE WEIGHT_LOGS // 
  var keys = [];

  for(var k in $scope.pet_data_selected.weight_logs) {
    keys.push(moment(k,"YYYY-MM-DD"));

  }

  var keys_ordered_old_to_new=$filter('orderBy')(keys)
//On est obligé d'ordonner pour pas que la graphe soit pas dans tous les sens. 
//On est obligé de convertir le string en date pour faire le sorting. 
  console.log("Sorted",keys_ordered_old_to_new);

  data_weight=[]
  data_nec=[]
  labels_date=[]
  for (var i = 0; i < keys_ordered_old_to_new.length; i++) {
    data_weight.push(parseFloat($scope.pet_data_selected.weight_logs[keys_ordered_old_to_new[i].format("YYYY-MM-DD")]));
    data_nec.push(parseFloat($scope.pet_data_selected.fat_score_logs[keys_ordered_old_to_new[i].format("YYYY-MM-DD")]));

    labels_date.push(keys_ordered_old_to_new[i].format("YYYY-MM-DD"))
}
  console.log(data_weight);
  console.log("PET",$scope.pet_data_selected);

  $scope.labels = labels_date
  $scope.data_weight=data_weight
  $scope.data_nec=data_nec
  $scope.data_weight_nec=[data_weight,data_nec];
  console.log("data_weight_nec=",$scope.data_weight_nec)
  console.log("fat_score_logs=",$scope.data_weight_nec)

  $scope.upper_limit_weight_graph_1=Math.round(1.4*(Math.max.apply(Math, $scope.data_weight)) / 10) * 10
  $scope.upper_limit_weight_graph_2=5 + Math.max.apply(Math, $scope.data_weight)
  $scope.datasetOverride = [
 {
        label: $scope.pet_data_selected.pet_name+"'s Weight",
        borderWidth: 3,
        type: 'bar',
        pointRadius:0,
        fill:false,
        yAxisID: 'y-axis-1'


      },
      {
        label: $scope.pet_data_selected.pet_name+"'s Body Condition Score",
        borderWidth: 3,
        type: 'line',
        pointRadius:10,
        fill:false,
        yAxisID: 'y-axis-2'


      }


  ];


//Quand y'a une seule valeur ça pose un problème dansdonc il faut améliorer ça. 
// Il faudrait voir si on pas à faire ça avec d'autres graphs. 
  
  if ($scope.data_weight.length>1){
    $scope.data_weight_max_graph=Math.round(1.4*(Math.max.apply(Math, $scope.data_weight)) / 10) * 10
  } 

  else {
    $scope.data_weight_max_graph=5 + Math.max.apply(Math, $scope.data_weight)

  }



  $scope.options = {legend: {
            display: true},
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left',
          ticks:{ min: 0, suggestedMax: $scope.data_weight_max_graph
},
          scaleLabel: {
                           display: true,
                           labelString: 'Weight (kg)'
            },
          gridLines: {
                        display: false
                    }

        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right',
          ticks:{ min: 0, max: 9
},
          scaleLabel: {
                           display: true,
                           labelString: 'Body Condition Score'
            },

          gridLines: {
                        display: false
                    }


        }
      ]
    }
  };






};





///MATERIEL POUR GERER LES PETS - ANNEXE

$scope.show_collapse=0

$scope.expandedPet = null;


////// DATE_PICKER MATERIAL //////
  $scope.today = function() {
    $scope.new_date = "A";
  };

  $scope.today();

  $scope.clear = function() {
    $scope.new_date  = null;
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
    console.log('triggered')
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.new_date  = new Date(year, month, day);
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


  $scope.update_weight = function(update) {
    $scope.new_date=moment(update.new_date)

    //0 : we need to know if the date already exists => En fait ça sert à rien, car il le fait déjà tout seul. On pourrait éventuellement dire "vous avez déjà rentré pour cette date, are you sure you want to continue"
    // if($scope.labels.indexOf($scope.pet_to_show_weight.dt) == -1) {
    //     console.log("La date existe déjà");

    //   }


    //1st : we inject the new weight and the date, but we must make sure it's not already in it. 
    // Il faut pousser le couple (date,weight) dans pet.weight_logs car il n'a pas été touché là. 
    $scope.pet_data_selected.weight_logs[$scope.new_date.format("YYYY-MM-DD")]= update.new_weight.toString();
    $scope.pet_data_selected.fat_score_logs[$scope.new_date.format("YYYY-MM-DD")]= update.new_fat_score.toString();


  
  var keys = [];

  for(var k in $scope.pet_data_selected.weight_logs) {
    keys.push(moment(k,"YYYY-MM-DD"));

  }

  var keys_ordered_old_to_new=$filter('orderBy')(keys)
//On est obligé d'ordonner pour pas que la graphe soit dans tous les sens. 
//On est obligé de convertir le string en date pour faire la conversion. 
  console.log("Sorted",keys_ordered_old_to_new);

  data_weight=[]
  data_nec=[]
  labels_date=[]
  for (var i = 0; i < keys_ordered_old_to_new.length; i++) {
    data_weight.push(parseFloat($scope.pet_data_selected.weight_logs[keys_ordered_old_to_new[i].format("YYYY-MM-DD")]));
    data_nec.push(parseFloat($scope.pet_data_selected.fat_score_logs[keys_ordered_old_to_new[i].format("YYYY-MM-DD")]));

    labels_date.push(keys_ordered_old_to_new[i].format("YYYY-MM-DD"))
}

    // On rinjecte pour que le graphe se mette à jour ;) 
    $scope.labels = labels_date
    $scope.data_weight=data_weight
    $scope.data_nec=data_nec
    $scope.data_weight_nec=[data_weight,data_nec];


    //2nd : we save to the weight_logs.
    $scope.entry = pet_by_id.get({ id: $scope.pet_data_selected.id }, function() {
          // $scope.entry is fetched from server and is an instance of Entry
        var last_date_updated_weight=$scope.labels[($scope.labels.length)-1];

      //ATTENTION,IL FAUT QUE CE SOIT LE PLUS RECENT DES DATE DU JSON QUI DONNE LE TRUC et pas forcément le dernier ajouté.On va donc prendre la dernière date de la liste ordonné 

        $scope.entry.weight_logs[$scope.new_date.format("YYYY-MM-DD")]= update.new_weight.toString();
        $scope.entry.fat_score_logs[$scope.new_date.format("YYYY-MM-DD")]= update.new_fat_score.toString();

        console.log("JSON_AFTER=",$scope.entry.weight_logs);
        $scope.entry.$update({id: $scope.entry.id},function() {
          console.log("updating en cours")

            //updated in the backend
          });
        });  






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


