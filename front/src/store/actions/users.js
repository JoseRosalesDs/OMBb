import {LOGINUSER, LOGOUTUSER} from '../constants'
import axios from 'axios';

const loginUser = (user) => ({
    type: LOGINUSER,
    user
})

const logOut = (user) => ({
    type: LOGOUTUSER,
    user
})

export const logUser = (user) => dispatch =>{
    return (axios.post(`/users/login`, user)
    .then(data => data.data)
    .then(user => dispatch(loginUser(user)))
    .catch(error => { throw new Error(error) } ))}

export const logOutUser = () => dispatch => {
    return (axios.post(`/users/logout`)
    .then(data => data.data)
    .then(user => dispatch(logOut(user)))
    .catch(error => error))
}

export const createUser = (user) => dispatch => {
    return (axios.post(`/users/register`, user)
    .then(res =>res.data))}