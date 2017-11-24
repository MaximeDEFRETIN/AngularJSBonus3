//on crée une variable vildForm qui utilise Angular.
//mailUtils=nom du module.
//ngRoute=dépendance.
var validForm = angular.module('mailUtils', ['ngRoute']);
//j'utilise le routeProvider
validForm.config(['$routeProvider', function($routeProvider){
  $routeProvider
//quand je click sur form je vais chercher mon fichier form.html et utilise mon controller formControl
  .when('/form', {
    templateUrl:'partials/form.html',
    controller:'formControl'
  })
  // ? veut dire que c'est optionnel
  .when('/view/:subjectName?', {
    templateUrl:'partials/view.html',
    controller:'viewControl'
  })
  //sinon j'utilise par default form
  .otherwise({
    redirectTo:'/form'
  });
}]);
//Je crée mon controller formControl
validForm.controller('formControl',['$scope', function($scope){
  $scope.subjectList=[];
  //j'appelle ma fonction sendClick du bouton Envoyer
  $scope.sendClick=function(){
    //push ermet de récupérer tous les sujets du tableau subjectList
    $scope.subjectList.push($scope.subject);
  }
}]);
//je crée mon controller viewControl
validForm.controller('viewControl', ['$scope', '$routeParams', function($scope, $routeParams){
//routeParams récupère toutes les variables de subjectName
  $scope.subjectName=$routeParams.subjectName;
}]);
