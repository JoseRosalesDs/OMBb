import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavbarContainer from "../containers/NavbarContainer"
import MoviesContainer from "../containers/MoviesContainer";
import MovieContainer from "../containers/MovieContainer";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
import SearchContainer from "../containers/SearchContainer";
import PrivateContainer from "../containers/PrivateContainer"
export default () => (
  <div>
        <NavbarContainer />
        <Switch>
        <Route exact path="/" component={SearchContainer} />
        <Route exact path="/search" component={MoviesContainer} />
        <Route path="/search/:imdbID" component={MovieContainer} />
        <Route path="/register" component={RegisterContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/private" component={PrivateContainer} />
        </Switch>
  </div>
);
