// модуль для вывода списка людей
var peopleModule = angular.module('app.peopleList', []);

// фабрика (сервис) для получения информации с базы данных через API
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

// контроллер модуля 'app.peopleList'
// ЗАМЕТКА: обратить внимание на имя контроллера: 'app.peopleList' => 'PeopleListController'
peopleModule.controller('PeopleListController', ['peopleService', PeopleListController]);

function PeopleListController(peopleService) {   
  
  var peopleList = this;
  
  peopleService.get().then(function(result) {
    peopleList.list = result.data;    
  });
}

