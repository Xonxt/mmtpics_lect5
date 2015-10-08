angular.module('app.main', []).
    controller('mainCtrl', mainCtrl);

function mainCtrl() { 
  alert('yo!'); 
  this.myVar = 'Hello, Angular 1.4.9!'; 
}