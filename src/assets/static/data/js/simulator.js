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
        .state('simulator', {
            url: '/simulator',
            templateUrl: "/static/data/angulartemplate/simulator/template.html",

            controller: 'Simulator_Ctrl'
        })

        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('simulator.pet', {
            url: '/pet',
            data: {
                pageTitle: 'Set parameters'},

            templateUrl: "/static/data/angulartemplate/simulator/pet.html",

        })


        // .state('simulator.research_term', {
        //     url: '/food',
        //     data: {
        //         pageTitle: 'Set up the Petfood filter'},
        //     templateUrl: "/static/data/angulartemplate/simulator/research_term.html",

        // })

        .state('simulator.result', {
            url: '/result',
            data: {
                pageTitle: 'Results !'},
            templateUrl: "/static/data/angulartemplate/simulator/result.html",

        })





    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/simulator/pet');


        });





angular.module('djangular-demo')
.controller('Simulator_Ctrl', function($scope, $http, $window,$filter,breed,list_of_pets,list_of_petfood_zooplus_dog,list_of_petfood_zooplus_dog,list_of_petfood_zooplus_cat,list_of_petfood_zooplus_dog_by_brand,petfood_zooplus_dog_filter,petfood_zooplus_cat_filter,list_of_pets,pet_by_id,simulator_market_filter_dog,$uibModal) {

//Note : il faut toujours que le selected soit dans le même controller. Il est dépendant du controller. Donc tu peux pas aller chercher le selected d'un autre controller. Ca marche pas. C'est unr fonction intrinsèque du constorllr. 


$scope.food={'protein':'','fat':'','cb':'','fb':'','moist':'','calcium':'','phosphore':'','price':'',
'specy':'','category':'','presentation':'','status':'','specs':'','brands':''}


$scope.list_status_dog=[
          {name:'Puppy_Unweaned',display:'Unweaned'},
          {name:'Puppy_Post_Weaning_Pre_Peak',display:'Growthing Weaned Puppy before the peak of growth'},
          {name:'Puppy_Post_Weaning_Post_Peak',display:'Growthing Weaned Puppy after the peak of growth'},
          {name:'Adult',display:'Adult'},
          {name:'Senior',display:'Senior'}]

$scope.list_specs_dog=[
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

$scope.list_status_cat=[{name:'Kitty_Pre_Weaning',display:'Unweaned kitten'},{name:'Kitty_Post_Weaning',display:'Growthing Weaned kitten'},{name:'Adult',display:'Adult'},{name:'Senior',display:'Senior'}]
$scope.list_specs_cat=[{name:'Neutered',display:'Sprayed/Neutered'},{name:'Weight Management',display:'Weight Management'},{name:'Exigent',display:'Small Apetite'},{name:'Lactation',display:'Lactation'},{name:'Gestation',display:'Gestation'},{name:'Intestinal Sensitivity',display:'Intestinal Sensitivity'},{name:'Skin Sensitivity',display:'Skin Sensitivity'},{name:'Stress',display:'Stress'},{name:'Joint',display:'Joint'},{name:'Dental Hygiene',display:'Dental Hygiene'},{name:'Hair Ball',display:'Hair Ball'},{name:'Outdoor Cat',display:'Outdoor Cat'},{name:'Indoor Cat',display:'Indoor Cat'},{name:'Grain Free',display:'Grain Free'},{name:'Gluten Free',display:'Gluten Free'},{name:'Organic',display:'Organic'},{name:'Growth_post_weaning',display:'Growth Post Weaning'},{name:'Growth_pre_weaning',display:'Growth Pre Weaning'}
]




$scope.list_brand_dog=['Acana', 'Advance Breed', 'Affinity Advance', 'Affinity Advance Veterinary Diets', 'Almo Nature', 'Alpha Spirit', 'Animonda', 'Applaws', 'Arden Grange', 'Barking Heads', 'Bosch', 'Bozita', 'Brekkies', 'Burns', 'Cesar', 'Defu (boîtes bio)', 'Defu (croquettes bio)', 'Dog Chow', 'Earthborn Holistic', 'Eukanuba', 'Euro Premium', 'Exclusion', 'Forthglade', 'Forza10', 'Frolic', 'GimDog', 'GranataPet', 'Green Petfood', 'Happy Dog', 'Happy Dog Natur', 'Happy Dog Supreme', 'Herrmanns', "Hill's", "Hill's Ideal Balance", "Hill's Nature's Best", "Hill's Prescription Diet", 'Hills', 'Iams', 'Integra', 'James Wellbeloved', 'Josera', 'Light', 'Lupo Natural', 'Lupo Sensitive', 'Markus-Mühle', 'Mastery', 'Meradog', 'Nature diet', 'Naturediet', 'Nova Foods Trainer Natural', 'Nutrivet', 'Nutro Choice', 'Opti Life (Versele Laga)', 'Optimanova', 'Orijen', 'Pedigree', 'Pitti Boris', 'Purina Pro Plan', 'Rinti', 'Rinti Canine', 'Royal Canin', 'Royal Canin Breed', 'Royal Canin Club / Selection', 'Royal Canin Veterinary Diet', 'SPECIFIC Veterinary Diet', 'Schesir', 'Simpsons Premium', 'Taste of the Wild', 'Terra Canis', 'True Instinct', 'Ultima', 'Virbac Vetcomplex', 'Yarrah', 'Yarrah (croquettes bio)', '★ Briantos', '★ Concept for Life', '★ DogMio', '★ Greenwoods', '★ Lukullus', '★ Lukullus Menu Gustico', '★ Purizon', '★ Rocco', '★ Wolf of Wilderness', '★ zooplus Classic', '★ zooplus Selection', '❤ zoolove by zooplus']
$scope.list_brand_cat=['Acana', 'Affinity Advance', 'Affinity Advance Veterinary Diets', 'Almo Nature', 'Animonda', 'Animonda Carny', 'Animonda Vom Feinsten', 'Applaws', 'Arden Grange', 'Beaphar', 'Bozita', 'Brekkies', 'Cat Chow', 'Catz Finefood', 'Eukanuba', 'Felix', 'Forthglade', 'Gourmet Gold', 'Gourmet Perle / À la carte / Mon Petit', 'GranataPet', 'Grau', 'Happy Cat', 'Herrmanns', "Hill's", "Hill's Ideal Balance", "Hill's Nature's Best", "Hill's Prescription Diet", "Hill's Science Plan", 'Iams', 'Integra', 'James Wellbeloved', 'Josera', 'Kattovit', 'Kitekat', 'MAC´s', 'Mastery', 'Miamor', 'Miamor (croquettes spécifiques)', 'Nutrivet', 'Nutro Choice', 'Optimanova (Visán)', 'Orijen', 'Perfect Fit', 'Porta 21', 'Pro Plan', 'Problèmes urinaires et rénaux', 'Purina One', 'Purina Pro plan Veterinary Diets', 'Royal Canin', 'Royal Canin Feline', 'Royal Canin Pure Feline', 'Royal Canin Vet Care Nutrition', 'Royal Canin Veterinary Diet', 'SPECIFIC  Veterinary Diet', 'Sanabelle', 'Schesir', 'Sheba', 'Simpsons Premium', 'Specific  veterinary diet', 'Surpoids et obésité', 'Taste of the Wild', 'Terra Faelis', 'Thrive', 'Thrive Complete', 'True Instinct', 'Ultima', 'Virbac Vetcomplex', 'Vitakraft Poesie', 'Wahre Liebe', 'Whiskas', 'Yarrah (boîtes bio)', 'Yarrah (croquettes bio)', '★ Catessy', '★ Concept for Life', '★ Cosma', '★ Feringa', '★ Greenwoods', '★ My Star', '★ Purizon', '★ Smilla', '❤ zoolove by zooplus']

$scope.gridOptions = {
    enableSorting: false,
    columnDefs: [
      { field: 'Name',displayName: "Name", enableSorting: true },
      { field: 'Brand', displayName: "Brand", enableSorting: true  },
      { field: 'Score',displayName: "Score", enableSorting: true },
      { field: 'Price',displayName: "Price", enableSorting: true  }]};



    
    $scope.show_next_button_pet = function(pet){
      if (pet.is_sick=='0')
      {$scope.pet_is_clicked= true;}
      else 
        { $scope.pet_is_clicked = false;
}

          };


$scope.food_is_clicked = false;
    
    $scope.show_next_button_food = function(){
      $scope.food_is_clicked= true;  
    };


// Pour l'instant logEvents permet juste de charger toutes les marques. Je pense que c'est peut être exagéré ? Sauf qu'il charge toutes les croquettes pour en extraire les croquettes ? 

$scope.set_pet_id = function(selected) {
    $scope.pet_data_selected=selected;
    console.log("SELECTED=",$scope.pet_data_selected);
    $scope.tag_spec=$scope.pet_data_selected.getCALCULUS["specs"]
    $scope.tag_targeted_life_stage=$scope.pet_data_selected.getCALCULUS["status"]

$scope.user.wished_status=$scope.tag_targeted_life_stage

$scope.user.wished_spec=$scope.tag_spec

$scope.user.wished_presentation=''

// Pour growth il faut que le specs qui est associé disparaisee. 
// Jsute growth en status et basta. Il faut faire sortir growth des target. 


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
};


// ['', 'Growth_post_weaning','', 'Urinary', 'Growth_pre_weaning','Renal','Long Hair', 'Cardiac', 'Hyperthyroidie', 'Diabete', 'Hepatic','Convalescence']


$scope.loadMore = function() {
   if ($scope.numberToDisplay + 5 < $scope.pet_food_selection.length) {
       $scope.numberToDisplay += 5;
   } else {
       $scope.numberToDisplay = $scope.pet_food_selection.length;
   }
};



$scope.request_simulation=function(food_parameter){
  console.log("FOOD_PARAMETER=",food_parameter)

  $scope.name_foods=[]

  $scope.rpc_foods=[]
  $scope.rpc_goals=[]
  $scope.rpc_legal=[]
  $scope.rpc_legal_adjusted=[]
  $scope.rpc_color=[]
  $scope.rpc_legal_color=[]
  $scope.rpc_legal_adjusted_color=[]
  $scope.rpc_ticks=[]

  $scope.ashes=[]
  $scope.ashes_max_limit=[]
  $scope.ashes_color=[]
  $scope.ashes_ticks=[]

  $scope.cell=[]
  $scope.cell_color=[]
  $scope.cell_max=[]
  $scope.cell_min=[]
  $scope.cell_max_color=[]
  $scope.cell_min_color=[]
  $scope.cell_ticks=[]


  $scope.fat=[]
  $scope.fat_color=[]
  $scope.fat_max=[]
  $scope.fat_min=[]
  $scope.fat_min_color=[]
  $scope.fat_max_color=[]
  $scope.fat_ticks=[]


  $scope.ena=[]
  $scope.ena_color=[]
  $scope.ena_ticks=[]
  $scope.ena_limit=[]
  $scope.ena_limit_color=[]

  $scope.calcium=[]
  $scope.calcium_color=[]
  $scope.calcium_ticks=[]
  $scope.calcium_ideal=[]
  $scope.calcium_ideal_color=[]

  $scope.phosphore=[]
  $scope.phosphore_color=[]
  $scope.phosphore_ticks=[]
  $scope.phosphore_ideal=[]
  $scope.phosphore_ideal_color=[]


  $scope.ca_p=[]
  $scope.ca_p_color=[]
  $scope.ca_p_max_limit=[]
  $scope.ca_p_min_limit=[]
  $scope.ca_p_min_limit_color=[]
  $scope.ca_p_max_limit_color=[]
  $scope.ca_p_ticks=[]

  $scope.data_score_price=[]
  $scope.prices=[]
  $scope.score_total=[]


  var list_spec_joined=food_parameter.specs.join();
  var list_brand_joined=food_parameter.brands.join();


    var data =simulator_market_filter_dog.query({protein:food_parameter.protein,fat:food_parameter.fat,cb:food_parameter.cb,fb:food_parameter.fb,moist:food_parameter.moist,calcium:food_parameter.calcium,phosphore:food_parameter.phosphore,price:food_parameter.price,specy:food_parameter.specy,format:food_parameter.category,sexual_capacity:food_parameter.sexual_capacity,sexual_status:food_parameter.sexual_status,status:food_parameter.status,list_specs:list_spec_joined,list_brands:list_brand_joined},function(callbackdata){

   $scope.pet_food_selection=callbackdata;



    });



};




$scope.request_to_make = function(a,b,c) {

  if (c=="1"){
    $scope.requeset_presentation="Dry"
  }

  else if (c=="2"){
    $scope.requeset_presentation="Wet"
  }


  if ($scope.pet_data_selected.specy==1){


  $scope.name_foods=[]

  $scope.rpc_foods=[]
  $scope.rpc_goals=[]
  $scope.rpc_legal=[]
  $scope.rpc_legal_adjusted=[]
  $scope.rpc_color=[]
  $scope.rpc_legal_color=[]
  $scope.rpc_legal_adjusted_color=[]
  $scope.rpc_ticks=[]

  $scope.ashes=[]
  $scope.ashes_max_limit=[]
  $scope.ashes_color=[]
  $scope.ashes_ticks=[]

  $scope.cell=[]
  $scope.cell_color=[]
  $scope.cell_max=[]
  $scope.cell_min=[]
  $scope.cell_max_color=[]
  $scope.cell_min_color=[]
  $scope.cell_ticks=[]


  $scope.fat=[]
  $scope.fat_color=[]
  $scope.fat_max=[]
  $scope.fat_min=[]
  $scope.fat_min_color=[]
  $scope.fat_max_color=[]
  $scope.fat_ticks=[]


  $scope.ena=[]
  $scope.ena_color=[]
  $scope.ena_ticks=[]
  $scope.ena_limit=[]
  $scope.ena_limit_color=[]

  $scope.calcium=[]
  $scope.calcium_color=[]
  $scope.calcium_ticks=[]
  $scope.calcium_ideal=[]
  $scope.calcium_ideal_color=[]

  $scope.phosphore=[]
  $scope.phosphore_color=[]
  $scope.phosphore_ticks=[]
  $scope.phosphore_ideal=[]
  $scope.phosphore_ideal_color=[]


  $scope.ca_p=[]
  $scope.ca_p_color=[]
  $scope.ca_p_max_limit=[]
  $scope.ca_p_min_limit=[]
  $scope.ca_p_min_limit_color=[]
  $scope.ca_p_max_limit_color=[]
  $scope.ca_p_ticks=[]

  $scope.data_score_price=[]
  $scope.prices=[]
  $scope.score_total=[]


  var k=a.join()
  //En faisant le join là tu as fait un a,b au lieu d'un a-b 


  
  // var data = petfood_zooplus_dog_filter.query({id_pet:$scope.pet_data_selected.id,presentation:"Dry",circuit:"No_Vet",specs:a,targeted_life_stage:b},function(callbackdata){
  
  var data = petfood_zooplus_dog_filter.query({id_pet:$scope.pet_data_selected.id,presentation:$scope.requeset_presentation,circuit:"No_Vet",specs:a,targeted_life_stage:b},function(callbackdata){
   //function is called on success
   $scope.pet_food_selection=callbackdata;
   //console.log($scope.pet_food_selection);
   if ($scope.pet_food_selection.length<50){
      $scope.is_above_50=0
   }
  else {
    $scope.is_above_50=1
  }


   $scope.numberToDisplay = 15;
   data_to_grid=[]
   $scope.rpc_leg_aafco=45


   angular.forEach(callbackdata, function(value, key){
          if (value.rank<50) {
          data_to_grid.push({"Name":value.name,"Brand":value.brand,"Score":value.score_total,"Price":value.price_month});
          $scope.name_foods.push(value.name);
          $scope.rpc_foods.push(parseFloat(value.rpc));
          $scope.rpc_goals.push($scope.pet_data_selected.getCALCULUS["RPC"]);
          

          $scope.rpc_legal.push($scope.rpc_leg_aafco);
          $scope.rpc_legal_adjusted.push(parseFloat($filter('number')($scope.rpc_leg_aafco/parseFloat($scope.pet_data_selected.getCALCULUS["k_tot_for_nutrient_adjustment"]), 1)));

//PROTEIN//



 if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.rpc_color.push("#f39c12");
          }
   

          else {
              if (parseFloat(value.rpc)>=parseFloat($scope.pet_data_selected.getCALCULUS["RPC"])){
                     $scope.rpc_color.push("#11f289");
                   }
              else if (parseFloat(value.rpc)>=$scope.rpc_leg_aafco/parseFloat($scope.pet_data_selected.getCALCULUS["k_tot_for_nutrient_adjustment"])){
                     $scope.rpc_color.push("#96baa9");
                   }
              else if (parseFloat(value.rpc)<$scope.rpc_leg_aafco/parseFloat($scope.pet_data_selected.getCALCULUS["k_tot_for_nutrient_adjustment"])) {
                     $scope.rpc_color.push("#B3B8BB");}
              else if (parseFloat(value.rpc)<$scope.rpc_leg_aafco) {
                     $scope.rpc_color.push("#B3B8BB");}
          }

//ASHES - On a choisi prendre aussi le k_tot et pas le k_tot_for_rpc//


          $scope.ashes.push(value.cb_mcal);
          if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.ashes_color.push("#f39c12");
          }

          else {
              if (value.presentation == 'Dry'){

                $scope.ashes_max_limit.push($scope.pet_data_selected.getCALCULUS["cb_mcal_max_dry"]);
                if (value.cb_mcal<parseFloat($scope.pet_data_selected.getCALCULUS["cb_mcal_max_dry"])){
                       $scope.ashes_color.push("#11f289");}
                else if (value.cb_mcal>=parseFloat($scope.pet_data_selected.getCALCULUS["cb_mcal_max_dry"])) {
                       $scope.ashes_color.push("#B3B8BB");}


              }

              else if (value.presentation == 'Wet'){

                $scope.ashes_max_limit.push($scope.pet_data_selected.getCALCULUS["cb_mcal_max_wet"]);
                if (value.cb_mcal<$scope.pet_data_selected.getCALCULUS["cb_mcal_max_wet"]){
                       $scope.ashes_color.push("#11f289");}
                else if (value.cb_mcal>=$scope.pet_data_selected.getCALCULUS["cb_mcal_max_wet"]) {
                       $scope.ashes_color.push("#B3B8BB");}



              }
          }

//ENA

        $scope.ena.push(value.ena_mcal);


        $scope.ena_limit.push($scope.pet_data_selected.getCALCULUS["ena_equi_hommemade"])

        if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.ena_color.push("#f39c12");
          }

        else { 

        if (value.ena_mcal<= $scope.pet_data_selected.getCALCULUS["ena_equi_hommemade"]){
            $scope.ena_color.push("#11f289")
          }

        else {
            $scope.ena_color.push("#B3B8BB")

          }

        }

//ENA-END

// CELLULOSE 

        $scope.cell.push(value.cell_mcal);
        $scope.cell_min.push($scope.pet_data_selected.getCALCULUS["cell_min"])
        $scope.cell_max.push($scope.pet_data_selected.getCALCULUS["cell_max"])

        if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.cell_color.push("#f39c12");
          }

        else { 

        if (parseFloat($scope.pet_data_selected.getCALCULUS["cell_min"])<=parseFloat(value.cell_mcal) && parseFloat(value.cell_mcal)<=parseFloat($scope.pet_data_selected.getCALCULUS["cell_max"])){
            $scope.cell_color.push("#11f289");  }

        else if ($scope.pet_data_selected.getCALCULUS["cell_min"]> value.cell_mcal || value.cell_mcal > $scope.pet_data_selected.getCALCULUS["cell_max"]){
            $scope.cell_color.push("#B3B8BB");  }

}

// FAT 


        $scope.fat.push(value.fat_mcal);
        $scope.fat_min.push($scope.pet_data_selected.getCALCULUS["fat_min"])
        $scope.fat_max.push($scope.pet_data_selected.getCALCULUS["fat_max"])


        if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.fat_color.push("#f39c12");
          }

        else {



        if ($scope.pet_data_selected.getCALCULUS["fat_min"]<=value.fat_mcal && value.fat_mcal<=$scope.pet_data_selected.getCALCULUS["fat_max"]){
            $scope.fat_color.push("#11f289");

        }

        else if ($scope.pet_data_selected.getCALCULUS["fat_min"]> value.fat_mcal || value.fat_mcal > $scope.pet_data_selected.getCALCULUS["fat_max"]) {
            $scope.fat_color.push("#B3B8BB");

        }

      }


// CA


        $scope.calcium.push(value.ca_mcal);
        $scope.calcium_ideal.push($scope.pet_data_selected.getCALCULUS["ca_goal"])

        if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.calcium_color.push("#f39c12");
          }

        else {

        if ($scope.pet_data_selected.getCALCULUS["ca_goal"]*0.9<=value.ca_mcal && value.ca_mcal<=1.10*$scope.pet_data_selected.getCALCULUS["ca_goal"]){
            $scope.calcium_color.push("#11f289");

        }

        else if ($scope.pet_data_selected.getCALCULUS["ca_goal"]*0.9>value.ca_mcal || value.ca_mcal >1.10*$scope.pet_data_selected.getCALCULUS["ca_goal"])  {
            $scope.calcium_color.push("#B3B8BB");

        }

}

//PHOS 


        $scope.phosphore.push(value.phos_mcal);
        $scope.phosphore_ideal.push($scope.pet_data_selected.getCALCULUS["phos_goal"])

        if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.phosphore_color.push("#f39c12");
          }

        else {


        if ($scope.pet_data_selected.getCALCULUS["phos_goal"]*0.9<=value.phos_mcal && value.phos_mcal<=1.10*$scope.pet_data_selected.getCALCULUS["phos_goal"]){
            $scope.phosphore_color.push("#11f289");

        }

        else if ($scope.pet_data_selected.getCALCULUS["phos_goal"]*0.9> value.phos_mcal || value.ca_mcal > 1.10*$scope.pet_data_selected.getCALCULUS["phos_goal"]) {
            $scope.phosphore_color.push("#B3B8BB");

        }

                }



//CA_P

          $scope.ca_p.push(value.ca_p_ratio_modified)
          $scope.ca_p_max_limit.push($scope.pet_data_selected.getCALCULUS["ca_p_max"])
          $scope.ca_p_min_limit.push($scope.pet_data_selected.getCALCULUS["ca_p_min"])

          
          if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.ca_p_color.push("#f39c12");
          }
          else {
            
            if ($scope.pet_data_selected.getCALCULUS["ca_p_min"]<= value.ca_p_ratio_modified && value.ca_p_ratio_modified<=$scope.pet_data_selected.getCALCULUS["ca_p_max"]){
                $scope.ca_p_color.push("#11f289");

            }
            else if ($scope.pet_data_selected.getCALCULUS["ca_p_min"]>value.ca_p_ratio_modified || value.ca_p_ratio_modified>$scope.pet_data_selected.getCALCULUS["ca_p_max"] ) {

                $scope.ca_p_color.push("#B3B8BB");

            }

          }


//CA_P-END

//SCORE_PRICE_BUBBLE


            $scope.data_score_price.push({'x':value.score_total,'y':value.price_month,'r':10,'name':value.name})
            $scope.prices.push(value.price_month)
            $scope.score_total.push(value.score_total)

}

});
        console.log("SCORE_PRICE=",$scope.data_score_price)

//Si tu utilises pas angular.copy tu crée un lien entre eux d'eux qui fait que chaque action chez l'un entraine chez l'autre.
        $scope.rpc_ticks=angular.copy($scope.rpc_foods)
        $scope.rpc_ticks.push($scope.pet_data_selected.getCALCULUS["RPC"])
        $scope.rpc_ticks.push($scope.rpc_leg_aafco)
        $scope.rpc_ticks.push($scope.rpc_leg_aafco/parseFloat($scope.pet_data_selected.getCALCULUS["k_tot_for_nutrient_adjustment"]))


        $scope.ashes_ticks=angular.copy($scope.ashes)
        if ($scope.requeset_presentation=="Dry"){
            $scope.ashes_ticks.push($scope.pet_data_selected.getCALCULUS["cb_mcal_max_dry"]);

        }
        else if ($scope.requeset_presentation=="Wet"){
            $scope.ashes_ticks.push($scope.pet_data_selected.getCALCULUS["cb_mcal_max_wet"]);

        }


        $scope.ena_ticks=angular.copy($scope.ena)
        $scope.ena_ticks.push($scope.pet_data_selected.getCALCULUS["ena_equi_hommemade"]);


        $scope.fat_ticks=angular.copy($scope.fat)
        $scope.fat_ticks.push($scope.pet_data_selected.getCALCULUS["fat_max"]);
        $scope.fat_ticks.push($scope.pet_data_selected.getCALCULUS["fat_min"]);

        $scope.cell_ticks=angular.copy($scope.cell)
        $scope.cell_ticks.push($scope.pet_data_selected.getCALCULUS["cell_max"]);
        $scope.cell_ticks.push($scope.pet_data_selected.getCALCULUS["cell_min"]);

        $scope.calcium_ticks=angular.copy($scope.calcium)
        $scope.calcium_ticks.push($scope.pet_data_selected.getCALCULUS["ca_goal"]);

        $scope.phosphore_ticks=angular.copy($scope.phosphore)
        $scope.phosphore_ticks.push($scope.pet_data_selected.getCALCULUS["phos_goal"]);


        $scope.ca_p_ticks=angular.copy($scope.ca_p)
        $scope.ca_p_ticks.push($scope.pet_data_selected.getCALCULUS["ca_p_max"]);
        $scope.ca_p_ticks.push($scope.pet_data_selected.getCALCULUS["ca_p_min"]);


        
    

//TABLEAU
   $scope.gridOptions.data=data_to_grid
   console.log("DATA_TO_GRID",$scope.gridOptions.data)
//END - TABLEAU

//GRAPHE-PROT
    $scope.labels = $scope.name_foods;

    $scope.data_protein = [$scope.rpc_goals,$scope.rpc_legal,$scope.rpc_legal_adjusted,$scope.rpc_foods];
    console.log("Proteins=",$scope.data_protein)
    $scope.dataProteinsetOverride = [
     
      {
        label: "Commonly admitted protein goal for "+ $scope.pet_data_selected.pet_name,
        borderWidth: 2.5,
        type: 'line',
        pointRadius:0,
        borderColor:'#99ff99',
        fill: false

      },
      {
        label: "Minimum of protein legally admitted for an average dog",
        type: 'line',
        borderWidth: 2.5,
        pointRadius:0,
        borderColor:"#ff9999",
        fill: false
      },
      {
        label: "Evaluated mean of protein legally adjusted for "+ $scope.pet_data_selected.pet_name,
        type: 'line',
        borderWidth: 2.5,
        pointRadius:0,
        borderColor:'#ffcc99',
        fill: false

      }, 
      {
        label: "Quantity of Proteins in a Petfood",
        borderWidth: 3,
        type: 'bar',
        backgroundColor:$scope.rpc_color,
        borderColor:'grey' 


      },


    ];
//END-GRAPHE-PROT


//GRAPH-ASHES
    $scope.data_ashes =[$scope.ashes_max_limit,$scope.ashes];
    console.log("Ashes=",$scope.data_ashes)
    $scope.dataAshessetOverride = [
      
      {
        label: "Commonly admitted ashes maximum for "+ $scope.pet_data_selected.pet_name,
        borderWidth: 2.5,
        type: 'line',
        pointRadius:0,
        fill: false,
        borderColor:'black' 



      },
      {
        label: "Quantity of Ashes in a Petfood",
        borderWidth: 3,
        type: 'bar',
        backgroundColor:$scope.ashes_color,
        borderColor:'grey' 


      }

    ];


//FaT-
    $scope.data_fat =[$scope.fat_max,$scope.fat_min,$scope.fat];
    console.log("fat=",$scope.data_fat)
    $scope.datafatsetOverride = [
    
      {
        label: "Admitted maximum of Fat for "+ $scope.pet_data_selected.pet_name,
        borderWidth: 3,
        type: 'line',
        pointRadius:0,
        borderColor:'black',
        fill:false


      },
      {
        label: "Admitted minimum of Fat for " + $scope.pet_data_selected.pet_name,
        borderWidth: 3,
        type: 'line',
        pointRadius:0,
        borderColor:'black',
        fill:false


      },

 
      {
        label: "Quantity of Fat in a Petfood",
        borderWidth: 2.5,
        type: 'bar',
        backgroundColor:$scope.fat_color,
        pointRadius:0,
        fill: false,
        borderColor:'grey' 



      }


    ];

//END-GRAPH-FAT


//CEll-ASHES
    $scope.data_cell =[$scope.cell_max,$scope.cell_min,$scope.cell];
    console.log("cell=",$scope.data_cell)
    $scope.datacellsetOverride = [
    
      {
        label: "Admitted maximum of Fiber for "+ $scope.pet_data_selected.pet_name,
        borderWidth: 3,
        type: 'line',
        pointRadius:0,
        borderColor:'black',
        fill:false


      },
      {
        label: "Admitted minimum of Fiber for " + $scope.pet_data_selected.pet_name,
        borderWidth: 3,
        type: 'line',
        pointRadius:0,
        borderColor:'black',
        fill:false


      },

 
      {
        label: "Quantity of Fiber in a Petfood",
        borderWidth: 2.5,
        type: 'bar',
        backgroundColor:$scope.cell_color,
        pointRadius:0,
        fill: false,
        borderColor:'grey' 



      }


    ];

//END-GRAPH-CELLULOSE

//CA-
    $scope.data_ca =[$scope.calcium_ideal,$scope.calcium];
    console.log("ca=",$scope.data_ca)
    $scope.datacalciumsetOverride = [
      
    
      {
        label: "Admitted ideal Quantity of Calcium for "+ $scope.pet_data_selected.pet_name,
        borderWidth: 3,
        type: 'line',
        borderColor:'black', 
        pointRadius:0,
        fill :false 


      },

{
        label: "Quantity of Calcium in a Petfood",
        borderWidth: 2.5,
        type: 'bar',
        backgroundColor:$scope.calcium_color,
        pointRadius:0,
        fill: false,
        borderColor:'grey' 


      }

    ];

//END-GRAPH-CA


//Phosphore
    $scope.data_phos =[$scope.phosphore_ideal,$scope.phosphore];
    console.log("phos=",$scope.data_phos)
    $scope.dataphosphoresetOverride = [
      
    
    {
        label: "Admitted ideal Quantity of Phosphore for " + $scope.pet_data_selected.pet_name,
        borderWidth: 3,
        type: 'line',
        borderColor:'black',
        pointRadius:0,
        fill:false


      },

  {
        label: "Quantity of Phosphore in a Petfood",
        borderWidth: 2.5,
        type: 'bar',
        backgroundColor:$scope.phosphore_color,
        pointRadius:0,
        fill: false,
        borderColor:'grey' 


      },

    ];

//END-GRAPH-CA


//GRAPH-CARB
    
    if ($scope.pet_data_selected.specy==1){
    $scope.data_carbs =[$scope.ena_limit,$scope.ena];
    console.log("carb=",$scope.data_carbs)

    $scope.dataCarbssetOverride = [
     
          {
        label: "The equivalent of carbs in a classic homemade recipe for "+ $scope.pet_data_selected.pet_name,
        borderWidth: 2.5,
        type: 'line',
        pointRadius:0,
        fill: false,
        borderColor:'black' 

      },

 {
        label: "Quantity of Carbohydrates in a Petfood",
        borderWidth: 3,
        type: 'bar',
        pointRadius:0,
        borderColor:'grey',
        backgroundColor:$scope.ena_color
      }

    ];

  }

    else {

    $scope.data_carbs =[$scope.ena_limit,$scope.ena];
    console.log("carb=",$scope.data_carbs)

    $scope.dataCarbssetOverride = [
        {
        label: "Cat don't need Carbs : 0 ! ",
        borderWidth: 2.5,
        type: 'line',
        pointRadius:0,
        fill: false,
        borderColor:'black' 

      },

{
        label: "Quantity of Carbohydrates in a Petfood",
        borderWidth: 3,
        type: 'bar',
        pointRadius:0,
        borderColor:'grey',
        backgroundColor:$scope.ena_color
      }
    ];

    }


//GRAPH - CA_P _ 1
      $scope.data_ca_p = [$scope.ca_p_min_limit,$scope.ca_p_max_limit,$scope.ca_p];
      console.log("carb=",$scope.data_ca_p)

      $scope.dataCaPsetOverride = [
          
          {
            label: "Commonly admitted Ca/P minimum ratio for "+ $scope.pet_data_selected.pet_name,
            borderWidth: 2.5,
            type: 'line',
            pointRadius:0,
            fill: false,
            borderColor:'black' 



          },

 {
            label: "Commonly admitted Ca/P maximum ratio for "+ $scope.pet_data_selected.pet_name,
            borderWidth: 2.5,
            type: 'line',
            pointRadius:0,
            fill: false,
            borderColor:'black' 



          },


          {
            label: "Calcium/Phosphorus ratio in a Petfood",
            borderWidth: 3,
            type: 'bar',
            backgroundColor:$scope.ca_p_color,
            pointRadius:0,
            borderColor:'grey' 



          }
];





      $scope.options_protein= {
                legend: {
            display: true},
                  scales: {
                    xAxes: [{
                                  scaleLabel: {
              display: true,
              labelString: 'Petfood'
            },

                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: Math.round(1.1*(Math.max.apply(Math, $scope.rpc_ticks)) / 10) * 10
},
                        scaleLabel: {
                           display: true,
                           labelString: 'Proteins (g/Mcal)'
            }

}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }

      $scope.options_ashes= {
                        legend: {
            display: true},

                  scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                        labelString: 'Petfood'
            },

                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: Math.round(1.3*(Math.max.apply(Math, $scope.ashes_ticks)) / 10) * 10
},
                       scaleLabel: {
                          display: true,
                          labelString: 'Ashes (g/Mcal)'
            }
}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }

      $scope.options_carb= {
                        legend: {
            display: true},
                  scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                             labelString: 'Petfood'
            },
                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: Math.round(1.1*(Math.max.apply(Math, $scope.ena_ticks)) / 10) * 10
},                     scaleLabel: {
                        display: true,
                          labelString: 'Carbohydrates (g/Mcal)'
            }

}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }


      $scope.options_fat= {
                        legend: {
            display: true},
                  scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                             labelString: 'Petfood'
            },
                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: Math.round(1.1*(Math.max.apply(Math, $scope.fat_ticks)) / 10) * 10
},                     scaleLabel: {
                        display: true,
                          labelString: 'Fat (g/Mcal)'
            }

}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }


      $scope.options_cell= {
                        legend: {
            display: true},
                  scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                             labelString: 'Petfood'
            },
                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: Math.round(1.1*(Math.max.apply(Math, $scope.cell_ticks)) / 10) * 10
},                     scaleLabel: {
                        display: true,
                          labelString: 'Fiber (g/Mcal)'
            }

}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }


      $scope.options_calcium= {
                        legend: {
            display: true},
                  scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                             labelString: 'Petfood'
            },
                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: 1+Math.round((Math.max.apply(Math, $scope.calcium_ticks)))
},                     scaleLabel: {
                        display: true,
                          labelString: 'Calcium (g/Mcal)'
            }

}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }



      $scope.options_phosphore= {
                        legend: {
            display: true},
                  scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                             labelString: 'Petfood'
            },
                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: 1+Math.round((Math.max.apply(Math, $scope.phosphore_ticks)))
},                     scaleLabel: {
                        display: true,
                          labelString: 'Phosphorus (g/Mcal)'
            }

}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }



      $scope.options_ca_p= {
                        legend: {
            display: true},
                  scales: {
                    xAxes: [{
                       scaleLabel: {
                        display: true,
                         labelString: 'Petfood' 
            },
                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: 1+Math.round((Math.max.apply(Math, $scope.ca_p_ticks)))},
                       scaleLabel: {
              display: true,
              labelString: 'Calcium/Phosphorus Ratio'
            }

}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }



      Chart.defaults.global.tooltipFontSize = 50;

      $scope.options_scores= {
          responsive: true,
          scales: {
          xAxes: [{
            ticks: { min: 0 , max: 100 },
            scaleLabel: {
              display: true,
              labelString: 'Score /100'
            }
          }],

          yAxes: [{
            ticks: { min: 0, max: Math.round(1.5*(Math.max.apply(Math, $scope.prices)) / 10) * 10},
            scaleLabel: {
              display: true,
              labelString: 'Price €/month'
            }
          }]
        },     

  tooltips: {
    enabled: true,
    mode: 'single',
    callbacks: {
      label: function(tooltipItem, data) {
        var label = data.labels[tooltipItem.index];
        var datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
        return label;
      }
    }
  },


      }



});






};

if ($scope.pet_data_selected.specy==2){


  $scope.name_foods=[]

  $scope.rpc_foods=[]
  $scope.rpc_goals=[]
  $scope.rpc_legal=[]
  $scope.rpc_legal_adjusted=[]
  $scope.rpc_color=[]
  $scope.rpc_legal_color=[]
  $scope.rpc_legal_adjusted_color=[]
  $scope.rpc_ticks=[]

  $scope.ashes=[]
  $scope.ashes_max_limit=[]
  $scope.ashes_color=[]
  $scope.ashes_ticks=[]

  $scope.cell=[]
  $scope.cell_color=[]
  $scope.cell_max=[]
  $scope.cell_min=[]
  $scope.cell_max_color=[]
  $scope.cell_min_color=[]
  $scope.cell_ticks=[]


  $scope.fat=[]
  $scope.fat_color=[]
  $scope.fat_max=[]
  $scope.fat_min=[]
  $scope.fat_min_color=[]
  $scope.fat_max_color=[]
  $scope.fat_ticks=[]


  $scope.ena=[]
  $scope.ena_color=[]
  $scope.ena_ticks=[]
  $scope.ena_limit=[]
  $scope.ena_limit_color=[]

  $scope.calcium=[]
  $scope.calcium_color=[]
  $scope.calcium_ticks=[]
  $scope.calcium_ideal=[]
  $scope.calcium_ideal_color=[]

  $scope.phosphore=[]
  $scope.phosphore_color=[]
  $scope.phosphore_ticks=[]
  $scope.phosphore_ideal=[]
  $scope.phosphore_ideal_color=[]


  $scope.ca_p=[]
  $scope.ca_p_color=[]
  $scope.ca_p_max_limit=[]
  $scope.ca_p_min_limit=[]
  $scope.ca_p_min_limit_color=[]
  $scope.ca_p_max_limit_color=[]
  $scope.ca_p_ticks=[]

  $scope.data_score_price=[]
  $scope.prices=[]
  $scope.score_total=[]


  var k=a.join()
  //En faisant le join là tu as fait un a,b au lieu d'un a-b 


  
  // var data = petfood_zooplus_dog_filter.query({id_pet:$scope.pet_data_selected.id,presentation:"Dry",circuit:"No_Vet",specs:a,targeted_life_stage:b},function(callbackdata){
  
  var data = petfood_zooplus_cat_filter.query({id_pet:$scope.pet_data_selected.id,presentation:$scope.requeset_presentation,circuit:"No_Vet",specs:a,targeted_life_stage:b},function(callbackdata){
   //function is called on success
   $scope.pet_food_selection=callbackdata;
   console.log($scope.pet_food_selection);
   $scope.numberToDisplay = 15;
   data_to_grid=[]
   $scope.rpc_leg_aafco=65

   if ($scope.pet_food_selection.length<50){
      $scope.is_above_50=0
   }
  else {
    $scope.is_above_50=1
  }

   angular.forEach(callbackdata, function(value, key){
          if (value.rank<50){
          data_to_grid.push({"Name":value.name,"Brand":value.brand,"Score":value.score_total,"Price":value.price_month});
          $scope.name_foods.push(value.name);
          $scope.rpc_foods.push(parseFloat(value.rpc));
          $scope.rpc_goals.push($scope.pet_data_selected.getCALCULUS["RPC"]);
          

          $scope.rpc_legal.push($scope.rpc_leg_aafco);
          $scope.rpc_legal_adjusted.push(parseFloat($filter('number')($scope.rpc_leg_aafco/parseFloat($scope.pet_data_selected.getCALCULUS["k_tot_for_nutrient_adjustment"]), 1)));

//PROTEIN//



 if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.rpc_color.push("#f39c12");
          }
   

          else {
              if (parseFloat(value.rpc)>=$scope.rpc_leg_aafco/parseFloat($scope.pet_data_selected.getCALCULUS["k_tot_for_nutrient_adjustment"])){
                     $scope.rpc_color.push("#11f289");
                     console.log("Oui oui",parseFloat(value.rpc),$scope.rpc_leg_aafco/parseFloat($scope.pet_data_selected.getCALCULUS["k_tot_for_nutrient_adjustment"]))
                   }
              else if (parseFloat(value.rpc)<$scope.rpc_leg_aafco/parseFloat($scope.pet_data_selected.getCALCULUS["k_tot_for_nutrient_adjustment"])) {
                     $scope.rpc_color.push("#96baa9");}
              else if (parseFloat(value.rpc)<$scope.rpc_leg_aafco) {
                     $scope.rpc_color.push("#99716f");}
          }

//ASHES - On a choisi prendre aussi le k_tot et pas le k_tot_for_rpc//


          $scope.ashes.push(value.cb_mcal);
          if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.ashes_color.push("#f39c12");
          }

          else {
              if (value.presentation == 'Dry'){

                $scope.ashes_max_limit.push($scope.pet_data_selected.getCALCULUS["cb_mcal_max_dry"]);
                if (value.cb_mcal<parseFloat($scope.pet_data_selected.getCALCULUS["cb_mcal_max_dry"])){
                       $scope.ashes_color.push("#11f289");}
                else if (value.cb_mcal>=parseFloat($scope.pet_data_selected.getCALCULUS["cb_mcal_max_dry"])) {
                       $scope.ashes_color.push("#B3B8BB");}


              }

              else if (value.presentation == 'Wet'){

                $scope.ashes_max_limit.push($scope.pet_data_selected.getCALCULUS["cb_mcal_max_wet"]);
                if (value.cb_mcal<$scope.pet_data_selected.getCALCULUS["cb_mcal_max_wet"]){
                       $scope.ashes_color.push("#11f289");}
                else if (value.cb_mcal>=$scope.pet_data_selected.getCALCULUS["cb_mcal_max_wet"]) {
                       $scope.ashes_color.push("#B3B8BB");}



              }
          }

//ENA

        $scope.ena.push(value.ena_mcal);

        $scope.ena_limit.push(0)


        if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.ena_color.push("#f39c12");
          }

        else {
            $scope.ena_color.push("#f1c111")

          }



    


//ENA-END

// CELLULOSE 

        $scope.cell.push(value.cell_mcal);
        $scope.cell_min.push($scope.pet_data_selected.getCALCULUS["cell_min"])
        $scope.cell_max.push($scope.pet_data_selected.getCALCULUS["cell_max"])

        if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.cell_color.push("#f39c12");
          }

        else { 

        if (parseFloat($scope.pet_data_selected.getCALCULUS["cell_min"])<=parseFloat(value.cell_mcal) && parseFloat(value.cell_mcal)<=parseFloat($scope.pet_data_selected.getCALCULUS["cell_max"])){
            $scope.cell_color.push("#11f289");  }

        else if ($scope.pet_data_selected.getCALCULUS["cell_min"]> value.cell_mcal || value.cell_mcal > $scope.pet_data_selected.getCALCULUS["cell_max"]){
            $scope.cell_color.push("#B3B8BB");  }

}

// FAT 


        $scope.fat.push(value.fat_mcal);
        $scope.fat_min.push($scope.pet_data_selected.getCALCULUS["fat_min"])
        $scope.fat_max.push($scope.pet_data_selected.getCALCULUS["fat_max"])


        if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.fat_color.push("#f39c12");
          }

        else {



        if ($scope.pet_data_selected.getCALCULUS["fat_min"]<=value.fat_mcal && value.fat_mcal<=$scope.pet_data_selected.getCALCULUS["fat_max"]){
            $scope.fat_color.push("#11f289");

        }

        else if ($scope.pet_data_selected.getCALCULUS["fat_min"]> value.fat_mcal || value.fat_mcal > $scope.pet_data_selected.getCALCULUS["fat_max"]) {
            $scope.fat_color.push("#B3B8BB");

        }

      }


// CA


        $scope.calcium.push(value.ca_mcal);
        $scope.calcium_ideal.push($scope.pet_data_selected.getCALCULUS["ca_goal"])

        if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.calcium_color.push("#f39c12");
          }

        else {

        if ($scope.pet_data_selected.getCALCULUS["ca_goal"]*0.9<=value.ca_mcal && value.ca_mcal<=1.10*$scope.pet_data_selected.getCALCULUS["ca_goal"]){
            $scope.calcium_color.push("#11f289");

        }

        else if ($scope.pet_data_selected.getCALCULUS["ca_goal"]*0.9>value.ca_mcal || value.ca_mcal >1.10*$scope.pet_data_selected.getCALCULUS["ca_goal"])  {
            $scope.calcium_color.push("#B3B8BB");

        }

}

//PHOS 


        $scope.phosphore.push(value.phos_mcal);
        $scope.phosphore_ideal.push($scope.pet_data_selected.getCALCULUS["phos_goal"])

        if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.phosphore_color.push("#f39c12");
          }

        else {


        if ($scope.pet_data_selected.getCALCULUS["phos_goal"]*0.9<=value.phos_mcal && value.phos_mcal<=1.10*$scope.pet_data_selected.getCALCULUS["phos_goal"]){
            $scope.phosphore_color.push("#11f289");

        }

        else if ($scope.pet_data_selected.getCALCULUS["phos_goal"]*0.9> value.phos_mcal || value.ca_mcal > 1.10*$scope.pet_data_selected.getCALCULUS["phos_goal"]) {
            $scope.phosphore_color.push("#B3B8BB");

        }

                }



//CA_P

          $scope.ca_p.push(value.ca_p_ratio_modified)
          $scope.ca_p_max_limit.push($scope.pet_data_selected.getCALCULUS["ca_p_max"])
          $scope.ca_p_min_limit.push($scope.pet_data_selected.getCALCULUS["ca_p_min"])

          
          if (value.id==$scope.pet_data_selected.food.initial.id){
            $scope.ca_p_color.push("#f39c12");
          }
          else {
            
            if ($scope.pet_data_selected.getCALCULUS["ca_p_min"]<= value.ca_p_ratio_modified && value.ca_p_ratio_modified<=$scope.pet_data_selected.getCALCULUS["ca_p_max"]){
                $scope.ca_p_color.push("#11f289");

            }
            else if ($scope.pet_data_selected.getCALCULUS["ca_p_min"]>value.ca_p_ratio_modified || value.ca_p_ratio_modified>$scope.pet_data_selected.getCALCULUS["ca_p_max"] ) {

                $scope.ca_p_color.push("#B3B8BB");

            }

          }


//CA_P-END

//SCORE_PRICE_BUBBLE


            $scope.data_score_price.push({'x':value.score_total,'y':value.price_month,'r':10,'name':value.name})
            $scope.prices.push(value.price_month)
            $scope.score_total.push(value.score_total)

}

});
        console.log("SCORE_PRICE=",$scope.data_score_price)

//Si tu utilises pas angular.copy tu crée un lien entre eux d'eux qui fait que chaque action chez l'un entraine chez l'autre.
        $scope.rpc_ticks=angular.copy($scope.rpc_foods)
        $scope.rpc_ticks.push($scope.pet_data_selected.getCALCULUS["RPC"])
        $scope.rpc_ticks.push($scope.rpc_leg_aafco)
        $scope.rpc_ticks.push($scope.rpc_leg_aafco/parseFloat($scope.pet_data_selected.getCALCULUS["k_tot_for_nutrient_adjustment"]))


        $scope.ashes_ticks=angular.copy($scope.ashes)
        if ($scope.requeset_presentation=="Dry"){
            $scope.ashes_ticks.push($scope.pet_data_selected.getCALCULUS["cb_mcal_max_dry"]);

        }
        else if ($scope.requeset_presentation=="Wet"){
            $scope.ashes_ticks.push($scope.pet_data_selected.getCALCULUS["cb_mcal_max_wet"]);

        }


        $scope.ena_ticks=angular.copy($scope.ena)
        $scope.ena_ticks.push($scope.pet_data_selected.getCALCULUS["ena_equi_hommemade"]);


        $scope.fat_ticks=angular.copy($scope.fat)
        $scope.fat_ticks.push($scope.pet_data_selected.getCALCULUS["fat_max"]);
        $scope.fat_ticks.push($scope.pet_data_selected.getCALCULUS["fat_min"]);

        $scope.cell_ticks=angular.copy($scope.cell)
        $scope.cell_ticks.push($scope.pet_data_selected.getCALCULUS["cell_max"]);
        $scope.cell_ticks.push($scope.pet_data_selected.getCALCULUS["cell_min"]);

        $scope.calcium_ticks=angular.copy($scope.calcium)
        $scope.calcium_ticks.push($scope.pet_data_selected.getCALCULUS["ca_goal"]);

        $scope.phosphore_ticks=angular.copy($scope.phosphore)
        $scope.phosphore_ticks.push($scope.pet_data_selected.getCALCULUS["phos_goal"]);


        $scope.ca_p_ticks=angular.copy($scope.ca_p)
        $scope.ca_p_ticks.push($scope.pet_data_selected.getCALCULUS["ca_p_max"]);
        $scope.ca_p_ticks.push($scope.pet_data_selected.getCALCULUS["ca_p_min"]);


        
    

//TABLEAU
   $scope.gridOptions.data=data_to_grid
   console.log("DATA_TO_GRID",$scope.gridOptions.data)
//END - TABLEAU

//GRAPHE-PROT
    $scope.labels = $scope.name_foods;

    $scope.data_protein = [$scope.rpc_goals,$scope.rpc_legal,$scope.rpc_legal_adjusted,$scope.rpc_foods];
    console.log("Proteins=",$scope.data_protein)
    $scope.dataProteinsetOverride = [
     
      {
        label: "Commonly admitted protein goal for "+ $scope.pet_data_selected.pet_name,
        borderWidth: 2.5,
        type: 'line',
        pointRadius:0,
        borderColor:'#99ff99',
        fill: false

      },
      {
        label: "Minimum of protein legally admitted for a dog",
        type: 'line',
        borderWidth: 2.5,
        pointRadius:0,
        borderColor:"#ff9999",
        fill: false
      },
      {
        label: "Evaluated mean of protein legally admitted for "+ $scope.pet_data_selected.pet_name,
        type: 'line',
        borderWidth: 2.5,
        pointRadius:0,
        borderColor:'#ffcc99',
        fill: false

      }, 
      {
        label: "Quantity of Proteins in a Petfood",
        borderWidth: 3,
        type: 'bar',
        backgroundColor:$scope.rpc_color,
        borderColor:'grey' 


      },


    ];
//END-GRAPHE-PROT


//GRAPH-ASHES
    $scope.data_ashes =[$scope.ashes_max_limit,$scope.ashes];
    console.log("Ashes=",$scope.data_ashes)
    $scope.dataAshessetOverride = [
      
      {
        label: "Commonly admitted ashes maximum for "+ $scope.pet_data_selected.pet_name,
        borderWidth: 2.5,
        type: 'line',
        pointRadius:0,
        fill: false,
        borderColor:'black' 



      },
      {
        label: "Quantity of Ashes in a Petfood",
        borderWidth: 3,
        type: 'bar',
        backgroundColor:$scope.ashes_color,
        borderColor:'grey' 


      }

    ];


//FaT-
    $scope.data_fat =[$scope.fat_max,$scope.fat_min,$scope.fat];
    console.log("fat=",$scope.data_fat)
    $scope.datafatsetOverride = [
    
      {
        label: "Admitted maximum of Fat for "+ $scope.pet_data_selected.pet_name,
        borderWidth: 3,
        type: 'line',
        pointRadius:0,
        borderColor:'black',
        fill:false


      },
      {
        label: "Admitted minimum of Fat for " + $scope.pet_data_selected.pet_name,
        borderWidth: 3,
        type: 'line',
        pointRadius:0,
        borderColor:'black',
        fill:false


      },

 
      {
        label: "Quantity of Fat in a Petfood",
        borderWidth: 2.5,
        type: 'bar',
        backgroundColor:$scope.fat_color,
        pointRadius:0,
        fill: false,
        borderColor:'grey' 



      }


    ];

//END-GRAPH-FAT


//CEll-ASHES
    $scope.data_cell =[$scope.cell_max,$scope.cell_min,$scope.cell];
    console.log("cell=",$scope.data_cell)
    $scope.datacellsetOverride = [
    
      {
        label: "Admitted maximum of Fiber for "+ $scope.pet_data_selected.pet_name,
        borderWidth: 3,
        type: 'line',
        pointRadius:0,
        borderColor:'black',
        fill:false


      },
      {
        label: "Admitted minimum of Fiber for " + $scope.pet_data_selected.pet_name,
        borderWidth: 3,
        type: 'line',
        pointRadius:0,
        borderColor:'black',
        fill:false


      },

 
      {
        label: "Quantity of Fiber in a Petfood",
        borderWidth: 2.5,
        type: 'bar',
        backgroundColor:$scope.cell_color,
        pointRadius:0,
        fill: false,
        borderColor:'grey' 



      }


    ];

//END-GRAPH-CELLULOSE

//CA-
    $scope.data_ca =[$scope.calcium_ideal,$scope.calcium];
    console.log("ca=",$scope.data_ca)
    $scope.datacalciumsetOverride = [
      
    
      {
        label: "Admitted ideal Quantity of Calcium for "+ $scope.pet_data_selected.pet_name,
        borderWidth: 3,
        type: 'line',
        borderColor:'black', 
        pointRadius:0,
        fill :false 


      },

{
        label: "Quantity of Calcium in a Petfood",
        borderWidth: 2.5,
        type: 'bar',
        backgroundColor:$scope.calcium_color,
        pointRadius:0,
        fill: false,
        borderColor:'grey' 


      }

    ];

//END-GRAPH-CA


//Phosphore
    $scope.data_phos =[$scope.phosphore_ideal,$scope.phosphore];
    console.log("phos=",$scope.data_phos)
    $scope.dataphosphoresetOverride = [
      
    
    {
        label: "Admitted ideal Quantity of Phosphore for " + $scope.pet_data_selected.pet_name,
        borderWidth: 3,
        type: 'line',
        borderColor:'black',
        pointRadius:0,
        fill:false


      },

  {
        label: "Quantity of Phosphore in a Petfood",
        borderWidth: 2.5,
        type: 'bar',
        backgroundColor:$scope.phosphore_color,
        pointRadius:0,
        fill: false,
        borderColor:'grey' 


      },

    ];

//END-GRAPH-CA


//GRAPH-CARB
    


    $scope.data_carbs =[$scope.ena_limit,$scope.ena];
    console.log("carb=",$scope.data_carbs)

    $scope.dataCarbssetOverride = [
        {
        label: "Cat don't need Carbs : 0 ! ",
        borderWidth: 2.5,
        type: 'line',
        pointRadius:0,
        fill: false,
        borderColor:'black' 

      },

{
        label: "Quantity of Carbohydrates in a Petfood",
        borderWidth: 3,
        type: 'bar',
        pointRadius:0,
        borderColor:'grey',
        backgroundColor:$scope.ena_color
      }
    ];




//GRAPH - CA_P _ 1
      $scope.data_ca_p = [$scope.ca_p_min_limit,$scope.ca_p_max_limit,$scope.ca_p];
      console.log("carb=",$scope.data_ca_p)

      $scope.dataCaPsetOverride = [
          
          {
            label: "Commonly admitted Ca/P minimum ratio for "+ $scope.pet_data_selected.pet_name,
            borderWidth: 2.5,
            type: 'line',
            pointRadius:0,
            fill: false,
            borderColor:'black' 



          },

 {
            label: "Commonly admitted Ca/P maximum ratio for "+ $scope.pet_data_selected.pet_name,
            borderWidth: 2.5,
            type: 'line',
            pointRadius:0,
            fill: false,
            borderColor:'black' 



          },


          {
            label: "Calcium/Phosphorus ratio in a Petfood",
            borderWidth: 3,
            type: 'bar',
            backgroundColor:$scope.ca_p_color,
            pointRadius:0,
            borderColor:'grey' 



          }
];





      $scope.options_protein= {
                legend: {
            display: true},
                  scales: {
                    xAxes: [{
                                  scaleLabel: {
              display: true,
              labelString: 'Petfood'
            },

                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: Math.round(1.1*(Math.max.apply(Math, $scope.rpc_ticks)) / 10) * 10
},
                        scaleLabel: {
                           display: true,
                           labelString: 'Proteins (g/Mcal)'
            }

}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }

      $scope.options_ashes= {
                        legend: {
            display: true},

                  scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                        labelString: 'Petfood'
            },

                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: Math.round(1.3*(Math.max.apply(Math, $scope.ashes_ticks)) / 10) * 10
},
                       scaleLabel: {
                          display: true,
                          labelString: 'Ashes (g/Mcal)'
            }
}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }

      $scope.options_carb= {
                        legend: {
            display: true},
                  scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                             labelString: 'Petfood'
            },
                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: Math.round(1.1*(Math.max.apply(Math, $scope.ena_ticks)) / 10) * 10
},                     scaleLabel: {
                        display: true,
                          labelString: 'Carbohydrates (g/Mcal)'
            }

}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }


      $scope.options_fat= {
                        legend: {
            display: true},
                  scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                             labelString: 'Petfood'
            },
                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: Math.round(1.1*(Math.max.apply(Math, $scope.fat_ticks)) / 10) * 10
},                     scaleLabel: {
                        display: true,
                          labelString: 'Fat (g/Mcal)'
            }

}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }


      $scope.options_cell= {
                        legend: {
            display: true},
                  scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                             labelString: 'Petfood'
            },
                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: Math.round(1.1*(Math.max.apply(Math, $scope.cell_ticks)) / 10) * 10
},                     scaleLabel: {
                        display: true,
                          labelString: 'Fiber (g/Mcal)'
            }

}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }


      $scope.options_calcium= {
                        legend: {
            display: true},
                  scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                             labelString: 'Petfood'
            },
                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: 1+Math.round((Math.max.apply(Math, $scope.calcium_ticks)))
},                     scaleLabel: {
                        display: true,
                          labelString: 'Calcium (g/Mcal)'
            }

}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }



      $scope.options_phosphore= {
                        legend: {
            display: true},
                  scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                             labelString: 'Petfood'
            },
                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: 1+Math.round((Math.max.apply(Math, $scope.phosphore_ticks)))
},                     scaleLabel: {
                        display: true,
                          labelString: 'Phosphorus (g/Mcal)'
            }

}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }



      $scope.options_ca_p= {
                        legend: {
            display: true},
                  scales: {
                    xAxes: [{
                       scaleLabel: {
                        display: true,
                         labelString: 'Petfood' 
            },
                       ticks: {
                           display: false
                              }}],
                              yAxes: [{
                       ticks:{ min: 0, max: 1+Math.round((Math.max.apply(Math, $scope.ca_p_ticks)))},
                       scaleLabel: {
              display: true,
              labelString: 'Calcium/Phosphorus Ratio'
            }

}]},
                    responsive: true,
                    title: {
                        display: false,
                        text: 'XXX'
                    }
                }



      Chart.defaults.global.tooltipFontSize = 50;

      $scope.options_scores= {
          responsive: true,
          scales: {
          xAxes: [{
            ticks: { min: 0 , max: 100 },
            scaleLabel: {
              display: true,
              labelString: 'Score /100'
            }
          }],

          yAxes: [{
            ticks: { min: 0, max: Math.round(1.5*(Math.max.apply(Math, $scope.prices)) / 10) * 10},
            scaleLabel: {
              display: true,
              labelString: 'Price €/month'
            }
          }]
        },     

  tooltips: {
    enabled: true,
    mode: 'single',
    callbacks: {
      label: function(tooltipItem, data) {
        var label = data.labels[tooltipItem.index];
        var datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
        return label;
      }
    }
  },


      }



});






};







//Fin de la fonction
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
