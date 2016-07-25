//Client-side js


$(document).ready(function() {
  console.log('app.js is loaded!');
  $.get('/api').success(function(movies){
    movies.forEach(function(movie){
      renderMovie(movie);
    });
  });
});


function renderMovie(movie) {
  console.log('rendering movie', movie);
  var movieHtml = $('#movie-template').html();
  var moviesTemplate = Handlebars.compile(movieHtml);
  var html = moviesTemplate(movie);
  $('#movies').prepend(html);
}
