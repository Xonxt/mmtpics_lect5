'use strict';

angular.module('app', ['app.main', 'ngNewRouter'])
  .controller('AppController', ['$router', AppController]);
  
function AppController($router) {   
  
  $router.config([
   { path: '/', component: 'main', templateUrl: 'main.jade'}
  ]);
}