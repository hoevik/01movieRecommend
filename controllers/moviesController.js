///////// dabase /////////

var db = require('../models');


//get api/movies
function index(req, res) {
  db.Movie.find({}, function(err, allMovies){
    res.json(allMovies);
  });
}

//CREATE
function create(req, res) {
  console.log('body', req.body);

  // split at comma and remove and trailing space
  // var genres = req.body.genres.split(',').map(function(item) { return item.trim(); } );
  // req.body.genres = genres;

  db.Movie.create(req.body, function(err, movie) {
    if (err) { console.log('error', err); }
    console.log(movie);
    res.json(movie);
  });
}
function show(req, res) {
  db.Movie.findById(req.params.movieId, function(err, foundMovie) {
    if(err) { console.log('moviesController.show error', err); }
    console.log('moviesController.show responding with', foundMovie);
    res.json(foundMovie);
  });
}



function destroy(req, res) {
  db.Movie.findOneAndRemove({ _id: req.params.movieId }, function(err, foundMovie){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundMovie);
  });
}



// export public methods here
module.exports = {
  index: index,
  create: create,
   destroy: destroy,
   show: show
  // destroy: destroy,
  // update: update
};
