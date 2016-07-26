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
  db.Movie.findOneAndRemove({ _id: req.params.movieId}, function(err, foundMovie){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundMovie);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Movie.findById(req.params.movieId, function(err, foundMovie) {
    if(err) { console.log('moviesController.update error', err); }
    foundMovie.Title = req.body.Title;
    foundMovie.Year = req.body.Year;
    foundMovie.Runtime = req.body.Runtime;
    foundMovie.save(function(err, savedMovie) {
      if(err) { console.log('saving altered movie failed'); }
      res.json(savedMovie);
    });
  });

}




// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
