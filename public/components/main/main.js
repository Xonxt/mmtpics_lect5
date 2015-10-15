angular.module('app.main', []).
    controller('MainController', MainController);

function MainController() { 
  this.myVar = 'This is an SPA, running on Angular 1.4.9!'; 
}