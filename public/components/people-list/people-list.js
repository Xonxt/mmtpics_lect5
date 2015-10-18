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

peopleModule.controller('PeopleListController', ['peopleService', PeopleListController]);

function PeopleListController(peopleService) {   
  
  var peopleList = this;
  peopleList.myVar = "testing?"
  
  peopleService.get().then(function(res) {
    peopleList.list = res.data;    
  });
}

