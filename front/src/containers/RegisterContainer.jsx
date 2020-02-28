import React, { useEffect } from "react";
import {connect} from 'react-redux'
import Register from "../components/Register";
import {createUser} from "../store/actions/users"
class RegisterContainer extends React.Component {

    constructor(props) {
    super(props)
    this.state = {
        name: '',
        email: '',
        password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount () {

    }

    handleSubmit (e) {
        e.preventDefault()
        let obj = {
            name: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value
        }
       this.props.createUser(obj)
       
       .then(() => this.props.history.push('/login'))
       
    }
    
    handleChange (e) {        
        this.setState({[e.target.name]: e.target.value})
    }
    
    
    
    render() { 
        return (
            <div className="container pt-4">
                <div className="row">
                    <Register handleSubmit = {this.handleSubmit} handleChange = {this.handleChange} state = {this.state}/>
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
        createUser: (user) => dispatch(createUser(user))
    }
}
export default connect(null, mapDispatchToProps)(RegisterContainer)