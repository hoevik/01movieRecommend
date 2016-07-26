//Client-side js

// var template;
// var $moviesList;
// var allMovies = [];
var counter =0;


$(document).ready(function() {
  console.log('app.js is loaded!');
  $.get('/api/movies').success(function(movies){
    movies.forEach(function(movie){
      renderMovie(movie);
    });
  });

  $('#movie-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData', formData);
    $.post('/api/movies', formData, function(movie) {
      console.log('movie after POST', movie);
      renderMovie(movie);  //render the server's response
    });
    $(this).trigger("reset");
    });

     $('#movies').on('click', '.delete-movie', handleDeleteMovieClick);


     $('legend').click(function() {

        if(counter%2===0){
          $( "#hide-form" ).hide('slow', function(){
            console.log('hide');
          });
        } else if(counter%2!==0)
          $( "#hide-form" ).show('slow', function(){
            console.log('show');
        });

        counter ++;
});


});

function handleDeleteMovieClick(e) {
  var movieId = $(this).parent('#movie').data('movie-id');
  console.log('someone wants to delete movie id=' + movieId );

  $.ajax({
    url: '/api/movies/' + movieId,
    method: 'DELETE',
    success: handleDeleteMovieSuccess
  });
}

// callback after DELETE /api/movie/:id
function handleDeleteMovieSuccess(data) {
  var deletedMovieId = data._id;
  console.log('removing the following movie from the page:', deletedMovieId);
  $('div[data-movie-id=' + deletedMovieId + ']').remove();
}



function renderMovie(movie) {
  console.log('rendering movie', movie);
  var movieHtml = $('#movie-template').html();
  var moviesTemplate = Handlebars.compile(movieHtml);
  var html = moviesTemplate(movie);
  $('#movies').prepend(html);
}
