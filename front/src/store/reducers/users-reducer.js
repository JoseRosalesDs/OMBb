import {LOGINUSER, LOGOUTUSER} from '../constants'

const initialState = {
    logged: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGINUSER:
            return Object.assign({}, state, {logged: action.user})
        case LOGOUTUSER:
            return Object.assign({}, state, {logged: {}})
        default:
            return state;
    }
}