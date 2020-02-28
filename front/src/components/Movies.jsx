import React from 'react'
import {Link} from 'react-router-dom'
export default ({list}) => {

    return (
        <div className="card-group">
            {list.map(movie=>{
            return(
                    <div key={movie.imdbID} className="col-md-3">
                        <Link to={`/search/${movie.imdbID}`}>
                            <img src={movie.Poster} className="card-img-top"></img>
                        </Link>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Title: </strong> {movie.Title}</h5>
                                <h6 className="card-year"><strong>Year: </strong> {movie.Year}</h6>
                                <h6 className="card-imdbID"><strong>imdbID: </strong> {movie.imdbID}</h6>
                                <h6 className="card-type"><strong>Type: </strong>{movie.Type}</h6>
                            </div>
                    </div>
                
            )})}

        </div>
    )
}