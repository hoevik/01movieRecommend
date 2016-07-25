///////// dabase /////////

var db = require('../models');



//get api/movies
function index(req, res){
    res.json({  message: "Welcome!"});
}


// export public methods here
module.exports = {
  index: index,
};
