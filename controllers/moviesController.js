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




// export public methods here
module.exports = {
  index: index,
  create: create
  // show: show,
  // destroy: destroy,
  // update: update
};
