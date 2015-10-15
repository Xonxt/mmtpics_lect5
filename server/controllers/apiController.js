var Person = require('../models/person');

exports.welcome = function(req, res) {
	res.json({message : "Welcome to our api!" });
}

exports.getAllPeople = function(req, res) {
	Person.find(function(err, people) {
		if(err) throw err;
		res.json(people);
	});
}

exports.getPerson = function(req, res) {
	res.json(req.person);
}

exports.addPerson = function(req, res) {
	var p = new Person();
			
	p._id = req.body._id;
	p.fullName = req.body.fullName;	
	p.birthDay = req.body.birthDay;
			
	p.save(function(err) {
		if (err) res.send(err);
		
		res.json({message: 'new person added!'});		
	});
}

exports.getById = function(req, res, next, id) {
	Person.findById(id, function(err, person) {
		if (err) return next(err);
		
		req.person = person;
		next();
	});
}