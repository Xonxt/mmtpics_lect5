var personModule = angular.module('app.personDetailed', []);

personModule.factory('personService', ['$http', function($http) {
  return {
    get : function(id) {
      return $http.get('/api/people/' + id);
    },    
    delete : function(id) {
      return $http.delete('/api/people/' + id);
    }    
  }  
}]);

personModule.controller('PersonDetailedController', ['$routeParams', '$scope', 'personService', PersonDetailedController]);

function PersonDetailedController($routeParams, $scope, personService) {
      
  var id = $routeParams.id;
  
  personService.get(id).then(function(res) {   
    $scope.item = res.data;  
  });
}