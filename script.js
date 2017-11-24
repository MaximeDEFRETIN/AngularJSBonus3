//on crée une variable vildForm qui utilise Angular.
//mailUtils=nom du module.
//ngRoute=dépendance.
var validForm = angular.module('mailUtils', ['ngRoute']); //déclarer un nouveau module
//.run permet de faire une action au démarrage de l'application
validForm.run(function($rootScope){
  //rootScope = variable globale qui passe outre les controllers
  //on initialise des tableaux ici pour eviter d'écraser les données au chargement de la page
  $rootScope.subjectList=[];
  $rootScope.nameList=[];
  $rootScope.emailList=[];
  $rootScope.textList=[];
});
//configuration des route
validForm.config(['$routeProvider', function($routeProvider){
  $routeProvider
//quand je click sur form je vais chercher mon fichier form.html et utilise mon controller formControl
  .when('/form', {
    templateUrl:'partials/form.html',
    controller:'formControl'
  })
  // ? veut dire que c'est optionnel
  .when('/view/:id?', {
    templateUrl:'partials/view.html',
    controller:'viewControl'
  })
  //sinon j'utilise par default form
  .otherwise({
    redirectTo:'/form'
  });
}]);
//Je crée mon controller formControl
validForm.controller('formControl',['$scope', '$rootScope', function($scope, $rootScope){
  //j'appelle ma fonction sendClick du bouton Envoyer
  $scope.sendClick=function(){
    //push permet de récupérer tous les sujets du tableau subjectList
    $rootScope.subjectList.push($scope.subject);
    $rootScope.nameList.push($scope.name);
    $rootScope.emailList.push($scope.email);
    $rootScope.textList.push($scope.text);
  }
}]);
//je crée mon controller viewControl
validForm.controller('viewControl', ['$scope', '$routeParams', '$rootScope', function($scope, $routeParams, $rootScope){
//routeParams récupère toutes les variables de id
  $scope.id=$routeParams.id;
  $scope.subject=$rootScope.subjectList[$scope.id];
  $scope.name=$rootScope.nameList[$scope.id];
  $scope.email=$rootScope.emailList[$scope.id];
  $scope.text=$rootScope.textList[$scope.id];
}]);
