const MovieList = ({ movies, currentGenre }) => {
  const filteredMovies = movies.filter(movie => movie.genre === currentGenre);
  
    return (
    <div id="movie-section">
        <h2>Movies</h2>
        {filteredMovies.length === 0 ? (
            <p>There are no movies to display.</p>
        ) : (
            <ul >
                {filteredMovies.map((movie) => (
                    <li className="movie" key={movie.id}>{movie.title} directed by {movie.director} ({movie.yearReleased})</li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default MovieList
