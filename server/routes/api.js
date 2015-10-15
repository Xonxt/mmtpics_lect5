var Person = require('../models/person');

module.exports = function (app) {
	
	var apiController = require('../controllers/apiController.js');	

	app.get('/api', apiController.welcome);
	
	// обработка маршрута для http://localhost/api/people
	// выдача всех записей в базе данных
	app.get('/api/people', apiController.getAllPeople);
	
	// обработка маршрута для http://localhost/api/people/id
	// где id - идентификатор записи в БД.
	// выводит запись из БД с идентификатором id
	app.get('/api/people/:id', apiController.getPerson); 
	
	// обрабатывает POST запрос на создание новой записи в БД
	// информация берется из тела запроса в JSON-формате
	app.post('/api/people', apiController.addPerson);
	
	// добавить middleware
	app.param('id', apiController.getById);
}