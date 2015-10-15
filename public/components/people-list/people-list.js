var peopleModule = angular.module('app.peopleList', []);

peopleModule.factory('peopleService', ['$http', function($http) {
  return {
    get : function() {
      return $http.get('/api/people');
    },    
    create : function(personData) {
      return $http.post('/api/people', personData);
    }    
  }  
}]);

peopleModule.controller('PeopleListController', ['$scope', 'peopleService', PeopleListController]);

function PeopleListController($scope, peopleService) {   
  
  this.myVar = "testing?"
  
  peopleService.get().then(function(res) {
    $scope.list = res.data;    
  });
}

