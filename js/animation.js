const comedyMovies = movieByGenre.filter(movie => movie.genre === "Animation")[0];
if (comedyMovies) {
  const html = comedyMovies.movies.map(movie => {
    return `
      <div class="card">
        <a href="../html/moviedetail.html">
          <img src="${movie.posterURL}" alt="" class="card-image">
          <span class="card-title">${movie.title}</span>
        </a>
      </div>
    `;
  }).join('');

  const moviesContainer = document.getElementById('animation-movies-list');
  moviesContainer.innerHTML = html;
} else {
  console.log("No movies found");
}