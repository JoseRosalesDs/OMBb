import React, {useEffect} from "react";
import Movies from '../components/Movies'
import {connect} from 'react-redux'

class MoviesContainer extends React.Component {

    render() {
        const {list} = this.props
        return (
            <div className="container pt-4">
                {list? <div className="row">
                <Movies list = {list}/>
                </div> 
                :
                <div className="row">
                <h2>Movie not found</h2>
                </div>  }
                
            </div>
        );
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
        list: state.moviesReducer.list.Search
    }
}

export default connect(mapStateToProps, null)(MoviesContainer)