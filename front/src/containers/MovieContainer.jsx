import React, { useEffect } from "react";
import {connect} from 'react-redux'
import Movie from "../components/Movie";
import {fetchMovie} from '../store/actions/movies'

class MovieContainer extends React.Component {

    constructor(props) {
    super(props)
    }

    componentWillMount () {
        this.props.fetchMovie(this.props.match.params.imdbID)
    }

    render() { 
        const {movie} = this.props      
        return (
            <div className="container pt-4">
                <div className="row">
                    <Movie movie = {movie}/>
                </div>

            </div>

        );
    }
}
const mapStateToProps = function (state, ownProps) {
    return {
        movie: state.moviesReducer.movie
    }
}
const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchMovie: (movie) => dispatch(fetchMovie(movie))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)