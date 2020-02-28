import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
export default ({onSearch, user, onLogOut}) => {
    console.log(user);
    
    const ref = useRef(null)
    if (!user.email) {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to="/" className= "nav-link">OMDB</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to ="/login" className= "nav-link">Log in <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                            <Link to ="/register" className= "nav-link">Sign in <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search movies" aria-label="Search" ref = {ref}></input>
                            <Link to= '/search'><button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick = {() => {onSearch(ref.current.value)}}>Search</button></Link>
                        </form>
                    </div>
                </nav>
            </div>
        )
    } else {
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className= "nav-link">OMDB</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active nav-link">
                            <Link to ="/" className= "nav-link" onClick = {onLogOut}>Log out <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active nav-link">
                            <Link to ="/private" className= "nav-link">Private <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active nav-link">
                                <p className= "nav-link">Welcome {user.email}!<span className="sr-only">(current)</span></p>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search movies" aria-label="Search" ref = {ref}></input>
                        <Link to= '/search'><button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick = {() => {onSearch(ref.current.value)}}>Search</button></Link>
                    </form>
                </div>
            </nav>
        </div>
        )
    }
    }