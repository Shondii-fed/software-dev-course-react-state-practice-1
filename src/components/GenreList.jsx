import genres from '../mock-data/genres';

const GenreList = ({ setCurrentGenre }) => {
  return (
    <div id="genre-section">
        <h2>Genres</h2>
        <ul >
            {genres.map((genre) => (
                <li className="genre" id="genre-list-item" key={genre.id} onClick={() => setCurrentGenre(genre.name)}>{genre.name}</li> 
            ))}
        </ul>
    </div>
  )
}

export default GenreList

