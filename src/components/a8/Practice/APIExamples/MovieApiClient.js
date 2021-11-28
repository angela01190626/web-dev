import React, {useEffect, useState} from "react";
// const MOVIE_API = 'http://localhost:4000/api/movies';

const MOVIE_API = 'https://safe-thicket-27885.herokuapp.com/api/movies';

const MovieApiClient = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() =>
            fetch(MOVIE_API)
                .then(response => response.json())
                .then(movies => setMovies(movies))
        , []);

    const deleteMovie = (movie) =>
        fetch(`${MOVIE_API}/${movie._id}`, {
            method: 'DELETE',
        })
            .then(() => setMovies(
                movies.filter(m => m._id !== movie._id)));

    const [movie, setMovie] = useState({rating: 2.5});
    // const [title, setTitle] = useState({title:''});

    const onMovieTitleChange = (event) =>
        setMovie({...movie, title: event.target.value});

    const createMovieClickHandler = () =>
        fetch(MOVIE_API, {
            method: 'POST',
            body: JSON.stringify({
                ...movie,
                _id:new Date().getTime() + '',
                title:''
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((movies) => setMovies(movies));

    const saveMovie = () =>
        fetch(`${MOVIE_API}/${movie._id}`, {
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((movies) => setMovies(movies));

    return(
        <div>
            {/*<h2>{JSON.stringify(movies)}</h2>*/}
            <button
                onClick={createMovieClickHandler}
                className="btn btn-success float-end">
                Create
            </button>
            <button
                onClick={saveMovie}
                className="btn btn-primary ms-2 float-end">
                Save
            </button>
            <input className="form-control"
                   value={movie.title}
                   onChange={onMovieTitleChange}
                   style={{width: "70%"}}/>
            <h2>Movies</h2>
            <ul className="list-group">
                {
                    movies.map(movie =>
                        <li className="list-group-item"
                            key={movie._id}>
                            {movie.title} {movie.rating}
                            <button onClick={() => setMovie(movie)}
                                    className="btn btn-primary float-end ms-2">
                                Edit
                            </button>
                            <button onClick={() => deleteMovie(movie)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
};

export default MovieApiClient;
