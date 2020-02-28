import React, { useEffect } from "react";
import Navbar from '../components/Navbar'
import {connect} from 'react-redux'
import {fetchMovies} from '../store/actions/movies'
import {logOutUser} from '../store/actions/users'
import Vista from "../components/Vista";

class NavbarContainer extends React.Component {
  
  constructor(props) {
    super(props)
    this.onSearch = this.onSearch.bind(this)
    this.onLogOut = this.onLogOut.bind(this)
  }

  onSearch (ref) {
    this.props.fetchMovies(ref)
  }

  onLogOut () {
    console.log(this.props.logOutUser())
    
    this.props.logOutUser()
  }

  render() {
    const {user} = this.props
    return (
      <Navbar onSearch = {this.onSearch} user = {user} onLogOut = {this.onLogOut}/>
    )
  }
}

const mapStateToProps = function (state, ownProps) {    
  return {
      user: state.userReducer.logged
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    fetchMovies: (movies) => dispatch(fetchMovies(movies)),
    logOutUser : () => dispatch(logOutUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)