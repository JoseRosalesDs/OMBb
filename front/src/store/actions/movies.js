import {FIND_MOVIES, FIND_MOVIE} from '../constants'
import axios from 'axios';

const findMovies = (movies) => ({
    type: FIND_MOVIES,
    movies
})

const findMovie = (movie) => ({
    type: FIND_MOVIE,
    movie
})

export const fetchMovies = (movie) => dispatch =>
    axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${movie}`)
    .then(data => data.data)
    .then(movies => dispatch(findMovies(movies)))

export const fetchMovie = (imdbID) => dispatch =>
    axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${imdbID}`)
    .then(data => data.data)
    .then(movie => dispatch(findMovie(movie)))