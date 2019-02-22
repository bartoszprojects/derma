/* Ce document contient le routage du multi-step formulaire pour créer le profil nutritionnel d'un 
animal donné. La deuxième partie du document est le controller associé à ce formulaire */ 

angular.module('djangular-demo').config(function($stateProvider, $urlRouterProvider) {


    $stateProvider

        .state('add_pet', {
            url: '/add_pet',
            templateUrl: "/static/data/angulartemplate/add_pet/template.html",
            controller: 'add_pet_Controller'
        }) 


        .state('add_pet.disclaimer', {
            url: '/disclaimer',
            templateUrl: "/static/data/angulartemplate/add_pet/disclaimer.html",
        }) 




        .state('add_pet.favrot_criteria', {
            url: '/favrot_criteria',
            templateUrl: " /static/data/angulartemplate/add_pet/favrot_criteria.html",

        })

        .state('add_pet.cadesi', {
            url: '/cadesi',
            templateUrl: "/static/data/angulartemplate/add_pet/cadesi.html",

        })

        .state('add_pet.flea_treatment', {
            url: '/flea_treatment',
            templateUrl: " /static/data/angulartemplate/add_pet/flea_treatment.html",
  })
        .state('add_pet.food_allergy', {
            url: '/food_allergy',
            templateUrl: "/static/data/angulartemplate/add_pet/food_allergy.html",


        })


        .state('add_pet.pyodermatitis', {
            url: '/pyodermatitis',
            templateUrl: " /static/data/angulartemplate/add_pet/pyodermatitis.html",

        })


        .state('add_pet.malassezia', {
            url: '/malassezia',
            templateUrl: " /static/data/angulartemplate/add_pet/malassezia.html",

        })



        .state('add_pet.otitis', {
            url: '/otitis',
            templateUrl: " /static/data/angulartemplate/add_pet/otitis.html",

        })


        .state('add_pet.desensitized', {
            url: '/desensitized',
            templateUrl: " /static/data/angulartemplate/add_pet/desensitized.html",

        })

        .state('add_pet.drugs_history', {
            url: '/drugs_history',
            templateUrl: " /static/data/angulartemplate/add_pet/drugs_history.html",

        })


        .state('add_pet.sum_up', {
            url: '/sum_up',
            templateUrl: " /static/data/angulartemplate/add_pet/sum_up.html",

        })


        .state('add_pet.name', {
            url: '/name',
            templateUrl: " /static/data/angulartemplate/add_pet/name.html",
        })

        .state('add_pet.age', {
            url: '/age',
            templateUrl: " /static/data/angulartemplate/add_pet/age.html",
        })

        .state('add_pet.breed', {
            url: '/breed',
            templateUrl: " /static/data/angulartemplate/add_pet/breed.html",
        })


         .state('add_pet.gender', {
            url: '/gender',
            templateUrl: " /static/data/angulartemplate/add_pet/gender.html",
        })

          .state('add_pet.sex', {
            url: '/sex',
            templateUrl: " /static/data/angulartemplate/add_pet/sex.html",

        })


        .state('add_pet.weight', {
            url: '/weight',
            templateUrl: "/static/data/angulartemplate/add_pet/weight.html",
        })

         .state('add_pet.fat', {
            url: '/fat',
            templateUrl: " /static/data/angulartemplate/add_pet/fat.html",
        })



        .state('add_pet.physical', {
            url: '/physical',
            templateUrl: "/static/data/angulartemplate/add_pet/physical.html",
        })

        .state('add_pet.fecal_score', {
            url: '/fecal_score',
            templateUrl: "/static/data/angulartemplate/add_pet/fecal_score.html",
        })



        .state('add_pet.owner_informations', {
            url: '/owner_informations',
            templateUrl: "/static/data/angulartemplate/add_pet/owner_informations.html",
        })


          .state('add_pet.sucess', {
            url: '/sucess',
            templateUrl: " /static/data/angulartemplate/add_pet/sucess.html",

        })




    $urlRouterProvider.otherwise('/add_pet/disclaimer');


        });



/* Contrôleur "add_pet_Controller" associé au formulaire */ 
/* Le parti a été pris de présenter les objets dans un ordre chronologique et non par catégorie de fonction
Les objets apparaissent ainsi selon la chronologie du formulaire au fur et à mesure de leur utilisation */ 


angular.module('djangular-demo')
        .controller('add_pet_Controller', function($scope, $http, $window,$filter,list_of_pets,pet_by_id,list_of_petfood_zooplus_dog,list_of_petfood_zooplus_cat,list_of_petfood_zooplus_dog_by_brand,list_of_petfood_zooplus_cat_by_brand,$uibModal,breed_all_dog,breed_all_cat,breed,pet_to_add){

       

/* Groupe de fonction permet de faire slider les différentes parties du questionnaire.
L'effet visuel de slide avant slide arrière n'est pas abouti. */ 

        $scope.slide="";
        $scope.$on('$stateChangeStart', function(){
        $scope.slide = $scope.slide || 'continue'
         });

        $scope.forward = function() {
        $scope.slide="continue";
        $window.history.forward();

          };


        $scope.backward = function() {
        $scope.slide="return";
        $window.history.back();

          };

/* Fin du groupe de fonction */ 


/*Initialisation pour favrot_criteria */
       $scope.pet_data={}

       $scope.pet_data.favrot_criteria={'three_years':0,'indoor_dog':0,'pruritus_corticoid':0,'no_lesion_pruritus':0,'front_feet':0,'ear_pinnae':0,'ear_margins':0,'dorso_lumbar':0}
       
       $scope.pet_data.favrot_can_be_included=0
     

       $scope.pet_data.favrot_can_be_included=$scope.pet_data.favrot_criteria.three_years+$scope.pet_data.favrot_criteria.indoor_dog+$scope.pet_data.favrot_criteria.pruritus_corticoid+$scope.pet_data.favrot_criteria.no_lesion_pruritus+$scope.pet_data.favrot_criteria.front_feet+$scope.pet_data.favrot_criteria.ear_pinnae+$scope.pet_data.favrot_criteria.ear_margins+$scope.pet_data.favrot_criteria.dorso_lumbar

       $scope.click_favrot_criteria = function() {
         /* This function recaculate the sum => need to be superior to 5 to get to the next step */ 
       $scope.pet_data.favrot_can_be_included=$scope.pet_data.favrot_criteria.three_years+$scope.pet_data.favrot_criteria.indoor_dog+$scope.pet_data.favrot_criteria.pruritus_corticoid+$scope.pet_data.favrot_criteria.no_lesion_pruritus+$scope.pet_data.favrot_criteria.front_feet+$scope.pet_data.favrot_criteria.ear_pinnae+$scope.pet_data.favrot_criteria.ear_margins+$scope.pet_data.favrot_criteria.dorso_lumbar
}

     
     $scope.cadesi_details={
       "Perilabial_Area":{
         "region":"Perilabial Area",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/perilabial.png"
       },
       "Left_Medial_Pinna":{
         "region":"Left Medial Pinna",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/medial_pinna_L.png"
       },
       "Right_Medial_Pinna":{
         "region":"Right Medial Pinna",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/medial_pinna_R.png"

       },
       "Left_Axilla":{
         "region":"Left Axilla",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/axilla_L.png"
       },
       "Right_Axilla":{
         "region":"Right Axilla",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/axilla_R.png"
       },
       "Left_Front_Paw":{
         "region":"Left Front Paw",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/front_paw_L.png"
       },
       "Right_Front_Paw":{
         "region":"Right Front Paw",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/front_paw_R.png"
       },
       "Left_Hind_Paw":{
         "region":"Left Hind Paw",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/hind_paw_L.png"
       },
       "Right_Hind_Paw":{
         "region":"Right Hind Paw",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/hind_paw_R.png"
       },
       "Left_Cubital_Flexor":{
         "region":"Left Cubital Flexor",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/cubital_flexor_L.png"
       },
       "Right_Cubital_Flexor":{
         "region":"Right Cubital Flexor",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/cubital_flexor_R.png"
       },
       "Left_Palmar_Metacarpal":{
         "region":"Left Palmar Metacarpal",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/palmar_metacarpal_L.png"
       },              

       "Right_Palmar_Metacarpal":{
         "region":"Right Palmar Metacarpal",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/palmar_metacarpal_R.png"
       },            

       "Left_Flank":{
         "region":"Left Flank",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/flank_L.png"
       },              
       "Right_Flank":{
         "region":"Right Flank",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/flank_R.png"
       },              
       "Left_Inguinal_Aera":{
         "region":"Left Inguinal Aera",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/inguinal_L.png"
       },              
       "Right_Inguinal_Aera":{
         "region":"Right Inguinal Aera",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/inguinal_R.png"
       },              

       "Abdomen":{
         "region":"Abdomen",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/abdomen.png"
       },              
       "Perineum":{
         "region":"Perineum",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/perineum.png"
       },              
       "Ventral Tail":{
         "region":"Ventral Tail",
         "value_erythema":0,
         "value_lichenification":0,
         "value_alopecia":0,
         "img_adress":"https://s3-us-west-2.amazonaws.com/smart-nutrition/data/img/cadesi/ventral_tail.png"
       },              


     }



$scope.age_year_list=[
            {"Value":0,"Display":"0 year"},
            {"Value":1,"Display":"1 year"},
            {"Value":2,"Display":"2 years"},
            {"Value":3,"Display":"3 years"},
            {"Value":4,"Display":"4 years"},
            {"Value":5,"Display":"5 years"},
            {"Value":6,"Display":"6 years"},
            {"Value":7,"Display":"7 years"},
            {"Value":8,"Display":"8 years"},
            {"Value":9,"Display":"9 years"},
            {"Value":10,"Display":"10 years"},
            {"Value":11,"Display":"11 year"},
            {"Value":12,"Display":"12 years"},
            {"Value":13,"Display":"13 years"},
            {"Value":14,"Display":"14 years"},
            {"Value":15,"Display":"15 years"},
            {"Value":16,"Display":"16 years"},
            {"Value":17,"Display":"17 year"},
            {"Value":18,"Display":"18 years"},
            {"Value":19,"Display":"19 years"},
            {"Value":20,"Display":"20 years"},
            {"Value":21,"Display":"21 years"},
            {"Value":22,"Display":"22 years"},
            {"Value":23,"Display":"23 years"},
            {"Value":24,"Display":"24 years"},
            {"Value":25,"Display":"25 years"}];


 $scope.age_month_list=[
            {"Value":0,"Display":"0 month"},
            {"Value":1,"Display":"1 month"},
            {"Value":2,"Display":"2 months"},
            {"Value":3,"Display":"3 months"},
            {"Value":4,"Display":"4 months"},
            {"Value":5,"Display":"5 months"},
            {"Value":6,"Display":"6 months"},
            {"Value":7,"Display":"7 months"},
            {"Value":8,"Display":"8 months"},
            {"Value":9,"Display":"9 months"},
            {"Value":10,"Display":"10 months"},
            {"Value":11,"Display":"11 months"},
            {"Value":12,"Display":"12 months"}
           ];


  $scope.getTotal_of_cadesi = function(){
   var total=0
   angular.forEach($scope.cadesi_details, function(value, key){
     total=total+value.value_erythema+value.value_lichenification+value.value_alopecia
     
   });
   $scope.pet_data.cadesi_score_total=total
   return total
}


  $scope.continue_from_cadesi = function(){
     angular.forEach($scope.cadesi_details, function(value, key){
    
    $scope.pet_data[key]={
         "region":value.region,
         "value_erythema":value.value_erythema,
         "value_lichenification":value.value_lichenification,
         "value_alopecia":value.value_lichenification
     }

     
   });

  }

    $scope.slider_pruritus = {
  options: {
    floor: 0,
    ceil: 10,
    step: 1,
    precision: 1,
    translate: function(value) {
      return value + '/10';}

  }
};



    $scope.slider = {
  options: {
    floor: 0,
    ceil: 100,
    step: 0.5,
    precision: 1,
    translate: function(value) {
      return value + ' Kg';}

  }
};




/* Initialisation de toutes les variables qui vont être stocké plus tard. pet_data est l'objet qui va contenir
cet ensemble de donnée */
/* Toutes les données ne sont pas forcément utilisés. Par exemple pet_data.dog_format ne sera pas utilisé pour un chat. 
Il sera détruit si un chat est sélectionné */ 

          // $scope.pet_data={}
          $scope.pet_data.owner_email='';
          $scope.pet_data.owner_name='';
          $scope.pet_data.owner_phone='';
          $scope.pet_data.owner_id='';
          $scope.pet_data.pet_name='';
          $scope.pet_data.crossed=5;
          $scope.pet_data.breed_dog_1_pure='';
          $scope.pet_data.breed_dog_1='';
          $scope.pet_data.breed_dog_2='';
          $scope.pet_data.dog_format='';
          $scope.pet_data.display=1;
          $scope.pet_data.specy=1;
          $scope.pet_data.gender='';

          $scope.pet_data.month_age='';
          $scope.pet_data.year_age='';

          $scope.pet_data.diet_agreed=0;
          $scope.pet_data.weight='';
          $scope.weight_logs={};
          $scope.fat_score_logs={};
          $scope.pet_data.fat_score_dog='';
          $scope.pet_data.sexual_capacity='';
          $scope.pet_data.physical_activity='';
          $scope.pet_data.flea_allergy_excluded='';
          $scope.pet_data.flea_drug='';
          $scope.pet_data.food_allergy={
            'excluded':'',
            'more_8_weeks':'',
            'type':'',
            'product':'',
            'recipe':''
          }

          $scope.pet_data.pruritus_score='';


          $scope.pet_data.pyodermatitis='';
          $scope.pet_data.pyodermatitis_history='';

          $scope.pet_data.malassezia='';
          $scope.pet_data.malassezia_history='';

          $scope.pet_data.recurring_otits='';
          $scope.pet_data.otitis='';
          $scope.pet_data.otitis_history='';





          $scope.pet_data.desensitized='';
          $scope.pet_data.desensitized_more_6_months='';
          $scope.pet_data.drug_history='';
          $scope.pet_data.drugs={
            'prednisolone':'',
            'oclacitinib':'',
            'cyclosporine':'',
            'cortavance':'',
            'antibacterial_shampoo':'',
            'dermatologic_shampoo':'',
            'omega':'',
            'yeast':''

          }



          $scope.favrot_criteria={}
          $scope.weight_logs={};
          $scope.fat_score_logs={};
          $scope.pet_data.fat_score_dog='';
          $scope.pruritus_score_logs={};
          $scope.drug_logs={}
          $scope.pet_data.cadesi_score_total=''
          $scope.cadesi_total_logs={}
          $scope.date_logs={};
          $scope.pet_data.accept_data_sharing=0

/*Initialisation de la variable pet_form qui contient l'ensemble des données relatifs au formulaire (pristine, dirty ... ) */ 
          $scope.pet_form={}


/* DATE - Cette ensemble de fonction permet de gérer l'outil datepicker de Bootstrap 
et importé dans l'entête de basic.html */   

  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
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
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

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
  };

/*Fonction triggered si le bouton Neutered (Castré en Français) est séléctionné. 
Dans ce cas, les données associés au reproduction_stage /duration / puppies_kitties sont détruites puisqu'un animal 
ne peut pas être castré et en lactation/gestation  */

  $scope.call_breed = function() {
          if ($scope.pet_data.specy==1){
            console.log("Breed=Dog")
            $scope.breed_data=breed_all_dog.query();
          }
          if ($scope.pet_data.specy==2){
            console.log("Breed=Cat")
            $scope.breed_data=breed_all_cat.query();
          }


          };

/* Une série de trois fonction click_pure_breed, click_crossed_breed, click_unknown breed, 
qui sont triggered lorsque l'un des trois boutons respectivement "Pure Breed" "Crossed Breed" ou "I dont know"
sont sélédctionnés */

  $scope.click_pure_breed = function() {

        /*Lorsqu'on clique sur "Pure_Breed" de la selection de la race. 
        /* On supprime donc les datas de races croisés breed_dog_1/breed_cat_1, breed_dog_2/breed_cat_1 ou de 
        morphologie dog_format */ 


        delete $scope.pet_data.breed_dog_1;
        delete $scope.pet_data.breed_dog_2;
        delete $scope.pet_data.dog_format;

/*Les variables age_calculated_months et status_age seont détailéls plus tard mais doivent être 
réinitialisés dés qu'on clique sur l'une des trois propositions (pure, crossed, don't know) relatives à la race 
Particulièrement status_age dépend de la race. */ 



          };

          
  $scope.click_crossed_breed = function() {

        /*Lorsqu'on clique sur "Crossed_Breed" de la selection de la race . 
        /* On supprime donc les datas de races croisés breed_dog_1_pure/breed_cat_1_pure,  ou de 
        morphologie dog_format */ 

        delete $scope.pet_data.dog_format;

/*Les variables age_calculated_months et status_age seont détailéls plus tard mais doivent être 
réinitialisés dés qu'on clique sur l'une des trois propositions (pure, crossed, don't know) relatives à la race 
Particulièrement status_age dépend de la race. */ 


          };


  $scope.click_unknown_breed = function() {

        /*Lorsqu'on clique sur "I don't know" de la selection de la race . 
        /* On supprime donc les datas de autre que le dog_format */ 

        delete $scope.pet_data.breed_dog_1_pure;
        delete $scope.pet_data.breed_dog_1;
        delete $scope.pet_data.breed_dog_2;
        delete $scope.pet_data.dog_format;
/*Les variables age_calculated_months et status_age seont détailéls plus tard mais doivent être 
réinitialisés dés qu'on clique sur l'une des trois propositions (pure, crossed, don't know) relatives à la race 
Particulièrement status_age dépend de la race. */ 
       


          };






$scope.save_profile_to_db=function() {

today=moment(new Date()).format("YYYY-MM-DD")
$scope.weight_logs[today]=$scope.pet_data.weight;
$scope.fat_score_logs[today]=$scope.pet_data.fat_score_dog;
$scope.pruritus_score_logs[today]=$scope.pet_data.pruritus_score;
$scope.cadesi_total_logs[today]=$scope.pet_data.cadesi_score_total;
$scope.drug_logs[today]=$scope.pet_data.drugs;
// $scope.date_logs={};
$scope.date_logs["inclusion_date"]=today
$scope.cadesi_details_logs = {}
$scope.cadesi_details_logs[today]=$scope.cadesi_details

if ($scope.pet_data.food_allergy.type=='1'){
  $scope.food=$scope.pet_data.food_allergy.product
  console.log("GO=",$scope.food)

};
     
if ($scope.pet_data.food_allergy.type=='2'){
  $scope.food=$scope.pet_data.food_allergy.recipe
  console.log("GO=",$scope.food)
}



  var data={
    'owner_email' : $scope.pet_data.owner_email,
    'owner_name':$scope.pet_data.owner_name,
    'owner_phone':$scope.pet_data.owner_phone,
    'recruiter_id' : '',
    'recruiter_email':'',
    'month_age':$scope.pet_data.month_age,
    'year_age':$scope.pet_data.year_age,
    'crossed' : $scope.pet_data.crossed,
    'breed_dog_1_pure': $scope.pet_data.breed_dog_1_pure,
    'breed_dog_1': $scope.pet_data.breed_dog_1,
    'breed_dog_2' : $scope.pet_data.breed_dog_2,
    'dog_format' : $scope.pet_data.dog_format,
    'date_logs':$scope.date_logs,
    'pet_name' : $scope.pet_data.pet_name,
    'display' : $scope.pet_data.display,
    'gender' : $scope.pet_data.gender,
    'sexual_capacity' : $scope.pet_data.sexual_capacity,
    'physical_activity' : $scope.pet_data.physical_activity,
    'accept_data_sharing':$scope.pet_data.accept_data_sharing,
    'pyodermatitis_history':$scope.pet_data.pyodermatitis_history,
    'otitis_history':$scope.pet_data.otitis_history,
    'malassezia_history':$scope.pet_data.malassezia_history,
    'favrot_criteria':$scope.pet_data.favrot_criteria,
    'weight_logs' : $scope.weight_logs,
    'fat_score_logs':$scope.fat_score_logs,
    'pruritus_score_logs':$scope.pruritus_score_logs,
    'cadesi_total_logs':$scope.cadesi_total_logs,
    'drug_logs':$scope.drug_logs,
    'flea_treatment':$scope.pet_data.flea_drug,
    'exclusion_diet':$scope.pet_data.food_allergy_food,
    'exlcusion_diet_food_recipe':$scope.food,
    'cadesi_details_logs':$scope.cadesi_details_logs
  }

  console.log("DATA=",data)

  return $http.post('/snippets/',data);
    };




});