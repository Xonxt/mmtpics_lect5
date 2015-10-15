var config = require('../config/config');
var mongoose = config.mongoose;

var Schema = mongoose.Schema;

var personSchema = new Schema({
	_id : Number,
	fullName : {
		firstName : String,
		lastName : String
	},
	birthDay : {
		day: Number,
		month : Number,
		year : Number
	}
}); 

var Person = mongoose.model('Person', personSchema);

module.exports = Person;