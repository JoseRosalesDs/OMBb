import React, {useEffect} from "react";
import Movies from '../components/Movies'
import {connect} from 'react-redux'
import NavbarContainer from "./NavbarContainer";
import Vista from "../components/Vista";

class SearchContainer extends React.Component {

    render() {
        return (
            <NavbarContainer />,
            <Vista />
        )
    }
}

export default connect(null, null)(SearchContainer)