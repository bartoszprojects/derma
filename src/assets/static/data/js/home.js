angular.module('djangular-demo')
        .controller('home-slide-tools', function($scope, $http, $window,$filter,list_of_pets,pet_by_id,$uibModal){
          $scope.list_of_pets_from_user = list_of_pets.query()

            // generate 40 cards
            $scope.cards =[
            {id:1,icon:"<i class='glyphicon glyphicon-dashboard'></i>",url:'/mypets/',title:"My Pets Dashboard"},
            {id:2,icon:"<i class='fa fa-plus'></i>",url:"/add_pet/",title:"Include a new Pet"},
            {id:5,icon:"<i class='fa fa-stethoscope'></i>",url:'/new_physical_consultation/',title:'New Physical Consultation'},
            {id:6,icon:"<i class='fa fa-phone'></i>",url:'/new_phone_consultation/',title:'New Phone Consultation'},
            {id:8,icon:"<i class='fa fa-cutlery'></i>",url:'/homemade_derma/',title:'DermatologiC Homemade Diet'}]
            // {id:9,icon:"<i class='fa fa-database'></i>",url:'/simulator/',title:"Nestle's Simulator"}]

            

            //  models for various cardflows
            $scope.cardflowNone = {};
            $scope.cardflowSnapOne = {};
            $scope.cardflowSnap = {};
            $scope.cardflowSnapPage = {};
            $scope.cardflowSnapKinetic = {};
            $scope.cardflowNonePage = {};
            $scope.cardflowSwipe = {};

            $scope.cardflowSnapKinetic.current=-1

        });
