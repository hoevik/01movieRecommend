var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/movie_test");

var Movie = require('./movies');

module.exports.Movie  = Movie;
