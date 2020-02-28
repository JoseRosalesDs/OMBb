import React from 'react'
export default ({movie}) => {
console.log(movie);

return (

<div className="card col-md-12 mx-auto">
    <div className="row no-gutters">
        <div className="col-md-4">
            <img src={movie.Poster} className="card-img"></img>
        </div>
        <div className="col-md-8">
            <div className="card-body">

                <h1>{movie.Title}</h1>
                <br />
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">Rated: {movie.Rated}</li>
                    <li className="list-group-item">{movie.Year}</li>
                    <li className="list-group-item">{movie.Runtime}</li>
                </ul>
                <br />
                <br />
                <h5 className="card-title" style={{textAlign: "justify"}}>{movie.Plot}</h5>
                <br />
                <h5 className="card-title" style={{textAlign: "justify"}}><strong>Genre: </strong>{movie.Genre}</h5>
                <br />
                <h5 className="card-title" style={{textAlign: "justify"}}><strong>Director: </strong>{movie.Director}</h5>
                <br />
                <h5 className="card-title" style={{textAlign: "justify"}}><strong>Actors: </strong>{movie.Actors}</h5>
                <br />
                <h5 className="card-title" style={{textAlign: "justify"}}><strong>Production: </strong>{movie.Production}</h5>
                <br />
            </div>
        </div>
    </div>
</div>

)
}