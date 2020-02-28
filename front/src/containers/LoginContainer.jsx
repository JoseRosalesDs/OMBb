import React, { useEffect } from "react";
import {connect} from 'react-redux'
import Login from "../components/Login";
import {logUser} from '../store/actions/users'

class LoginContainer extends React.Component {

    constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: '',
        error: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount () {

    }

    handleSubmit (e) {
        e.preventDefault()
        let obj = {
            email: e.target[0].value,
            password: e.target[1].value
        }
       this.props.logUser(obj).then(()=> {           
           
           this.setState({error: false})
        })
        .then(() => this.props.history.push('/'))
        .catch(() => this.setState({error: true}))
    }

    handleChange (e) {          
        console.log({[e.target.name]: e.target.value});
        
        this.setState({[e.target.name]: e.target.value})
    }



    render() { 
        return (
            <div className="container pt-4">
                <div className="row">
                    <Login handleSubmit = {this.handleSubmit} handleChange = {this.handleChange} state = {this.state} />
                </div>
            </div>

        );
    }
}
// const mapStateToProps = function (state, ownProps) {    
//     return {
//     }
// }
const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        logUser: (user) => dispatch(logUser(user))
    }
}
export default connect(null, mapDispatchToProps)(LoginContainer)