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
  $.post('/api/movies', formData, function(album) {
    console.log('album after POST', album);
    renderAlbum(album);  //render the server's response
  });
  $(this).trigger("reset");
});

});


function renderMovie(movie) {
  console.log('rendering movie', movie);
  var movieHtml = $('#movie-template').html();
  var moviesTemplate = Handlebars.compile(movieHtml);
  var html = moviesTemplate(movie);
  $('#movies').prepend(html);
}
