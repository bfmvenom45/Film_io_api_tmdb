import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "src/pages/Home";
import Popular from "src/pages/Popular";
import FilmPage from "src/pages/FilmPage";
import SearchBar from 'src/pages/SearchBar';

const Main = () => {
    return (
        <Switch>
            <Route path='/app/home' component={Home}/>
            <Route path='/app/popular' component={Popular}/>
            <Route path='/app/film/:id' component={FilmPage}/>
            <Route path='/app/search/' component={SearchBar}/>
            <Redirect to={'/app/home'}/>

        </Switch>
    );
};

export default Main;