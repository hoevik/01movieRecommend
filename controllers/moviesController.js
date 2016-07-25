///////// dabase /////////

var db = require('../models');


//get api/movies
function index(req, res) {
  db.Movie.find({},function(err, allMovies){
    res.json(allMovies);
  });
}



// export public methods here
module.exports = {
  index: index
};
