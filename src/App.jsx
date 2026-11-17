import './App.css';
import GenreList from './components/GenreList';
import MovieList from './components/MovieList';
import movies from '../src/mock-data/movies'
import { useState } from 'react';

function App() {
	const [currentGenre, setCurrentGenre] = useState("")
	return (
	<>
		<div>
			<header><h1>Movies By Genre</h1></header>
			<GenreList setCurrentGenre={setCurrentGenre} />
			<MovieList movies={movies} currentGenre={currentGenre} />
		</div>
	</>
	);
}

export default App;
