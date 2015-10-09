angular.module('app.main', []).
    controller('MainController', MainController);

function MainController() { 
  //alert('yo');
  this.myVar = 'Hello, Angular 1.4.9!'; 
}