// This file allows us to seed our application with data
var db = require("./models");

var movieList= [
  {
    Title: "Harry Potter and the Deathly Hallows: Part 2",
    Year: "2011",
    Rated: "PG-13",
    Released: "15 Jul 2011",
    Runtime: "130 min",
    Genre: "Adventure, Drama, Fantasy",
    Director: "David Yates",
    Writer: "Steve Kloves (screenplay), J.K. Rowling (novel)",
    Actors: "Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe",
    Plot: "Harry, Ron and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Nominated for 3 Oscars. Another 45 wins & 87 nominations.",
    Poster: "http://ia.media-imdb.com/images/M/MV5BMTY2MTk3MDQ1N15BMl5BanBnXkFtZTcwMzI4NzA2NQ@@._V1_SX300.jpg",
    Metascore: "87",
    imdbRating: "8.1",
    imdbVotes: "535,695",
    imdbID: "tt1201607",
    Type: "movie",
    Response: "True"
  },
  {
    Title: "Bottom 2001: An Arse Oddity",
    Year: "2001",
    Rated: "N/A",
    Released: "19 Nov 2001",
    Runtime: "87 min",
    Genre: "Comedy",
    Director: "Dewi Humphreys",
    Writer: "Adrian Edmondson, Rik Mayall",
    Actors: "Rik Mayall, Adrian Edmondson",
    Plot: "Richie and Eddie escapes from the island and try to get to the bar to have a drink, only to find themselves trapped in a underground chamber and Richie thinks they've been abducted by aliens.",
    Language: "English",
    Country: "UK",
    Awards: "N/A",
    Poster: "http://ia.media-imdb.com/images/M/MV5BMTYwNjQxODczOF5BMl5BanBnXkFtZTcwMjE2NTMyMQ@@._V1_SX300.jpg",
    Metascore: "N/A",
    imdbRating: "7.5",
    imdbVotes: "786",
    imdbID: "tt0309387",
    Type: "movie",
    Response: "True"
  },
  {
    Title: "Fuckboy Mountain",
    Year: "2016",
    Rated: "N/A",
    Released: "10 Apr 2016",
    Runtime: "N/A",
    Genre: "Short, Comedy",
    Director: "Jake Nathanson",
    Writer: "Chelsea Frei",
    Actors: "Akono Dixon, Ben Getz, Dylan Palladino, Noam Tomaschoff",
    Plot: "N/A",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster: "http://ia.media-imdb.com/images/M/MV5BNTEzNDQ0MmEtNDNmNC00ZjM4LWJkOWQtNmQxZjJhMmEzNjY0XkEyXkFqcGdeQXVyNjM4MzM2Mzg@._V1_SX300.jpg",
    Metascore: "N/A",
    imdbRating: "N/A",
    imdbVotes: "N/A",
    imdbID: "tt5676920",
    Type: "movie",
    Response: "True"
  }
];


db.Movie.remove({}, function(err, movies){

  db.Movie.create(movieList, function(err, movies){
    if (err) { return console.log('ERROR', err); }
    console.log("all movies:", movies);
    console.log("created", movies.length, "movies");
    process.exit();
  });

});
