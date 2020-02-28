import {FIND_MOVIES, FIND_MOVIE} from '../constants'

const initialState = {
    list: [],
    movie: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FIND_MOVIES:
            return Object.assign({}, state, {list: action.movies})
        case FIND_MOVIE:
            return Object.assign({}, state, {movie: action.movie})
        default:
            return state;
    }
}