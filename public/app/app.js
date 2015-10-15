'use strict';

var appModule = angular.module('app', ['app.main', 'app.peopleList', 'app.personDetailed', 'ngNewRouter', 'ngResource']);

appModule.controller('AppController', ['$router', AppController]);
  
appModule.controller('NavController', ['$scope', '$location', NavController]);
  
function AppController($router) {   
  
  $router.config([
   { path: '/', component: 'main'},
   { path: '/people', component: 'peopleList'},
   { path: '/people/:id', component: 'personDetailed'}
  ]);
}

function NavController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}