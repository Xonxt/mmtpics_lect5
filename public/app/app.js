'use strict';

// создаём модуль для главного приложения Angular
// приложение называется 'app', далее идет список всех под-модулей приложения:
// 'app.main' - основной модуль, который будет загружаться по-умолчанию по-маршруту '/'
// 'app.peopleList' - модуль, выводящий список всех записей из базы данных по маршруту '/people'
// 'app.personDetailed' - модуль, выводящий информацию о конкретной записи в БД по маршруту '/people/:id'
// также далее идет список зависимостей:
// 'ngNewRouter' - модуль маршрутизации Angular
// 'ngResource' - модуль для работы с 'RESTful' источниками
var appModule = angular.module('app', ['app.main', 'app.peopleList', 'app.personDetailed', 'ngNewRouter', 'ngResource']);

// основной контроллер приложения 'app'
appModule.controller('AppController', ['$router', AppController]);
  
function AppController($router) {    
  // конфигурация маршрутов 
  $router.config([
   { path: '/', component: 'main'},
   { path: '/people', component: 'peopleList'},
   { path: '/people/:id', component: 'personDetailed'}
  ]);
}
 
// контроллер для панели навигации 
appModule.controller('NavController', ['$scope', '$location', NavController]);
function NavController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}