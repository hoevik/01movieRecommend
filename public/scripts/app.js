//Client-side js


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

});

function handleDeleteMovieClick(e) {
  var movieId = $(this).parents('.movie').data('movie-id');
  console.log('someone wants to delete movie id=' + movieId );
  $.ajax({
    url: '/api/movies/' + movieId,
    method: 'DELETE',
    success: handleDeleteMovieSuccess
  });
}


function renderMovie(movie) {
  console.log('rendering movie', movie);
  var movieHtml = $('#movie-template').html();
  var moviesTemplate = Handlebars.compile(movieHtml);
  var html = moviesTemplate(movie);
  $('#movies').prepend(html);
}
