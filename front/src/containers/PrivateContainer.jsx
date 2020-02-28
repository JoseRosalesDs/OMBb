import React, { useEffect } from "react";
import {connect} from 'react-redux'
import Private from "../components/Private";
import {createUser} from "../store/actions/users"
class PrivateContainer extends React.Component {

    render() { 
        return (
            <div className="container pt-4">
                <div className="row">
                    <Private />
                </div>
            </div>

        );
    }
}

export default connect(null, null)(PrivateContainer)