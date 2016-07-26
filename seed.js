// This file allows us to seed our application with data
var db = require("./models");

var movieList= [];


db.Movie.remove({}, function(err, movies){

  db.Movie.create(movieList, function(err, movies){
    if (err) { return console.log('ERROR', err); }
    console.log("all movies:", movies);
    console.log("created", movies.length, "movies");
    process.exit();
  });

});
