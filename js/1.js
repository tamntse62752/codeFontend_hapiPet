 var app = angular.module('myApp',[]);
 app.controller('MyController',  function($scope){
    
    $scope.hienthi = false;
    $scope.suaPet = function(){
        $scope.hienthi = !$scope.hienthi;
    }

    $scope.petList = [
        {
            petName: "Milo",
            petBreed: "Golden Retriver",
            petBirth: "19/07/2017",
            petGender: "Cai",
            petColor: "Vang",
            petWeight: "25.7 kg",
            petChipNum: "",
            petNote: "Pet rat ham an",
        },
    ];
 })


