var port = 8080;

var dbUrl = "mongodb://localhost/lect3";
var mongoose = require("mongoose");
mongoose.connect(dbUrl);

exports.port = port;
exports.dbUrl = dbUrl;
exports.mongoose = mongoose;