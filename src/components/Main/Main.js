import { Container } from '@material-ui/core';
import { idID } from '@material-ui/core/locale';
import React, { useContext } from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';
import FilmCard from 'src/components/FilmCard';
import FilmList from 'src/components/FilmList';
import Home from "src/pages/Home";
import Popular from "src/pages/Popular";
import FilmPage from "src/pages/FilmPage";
import SearchBar from 'src/pages/SearchBar';

const Main = () => {
    return (
        <Switch>
            <Route path='/app/home'>
              <Container maxWidth='lg'>
                <Home/>
              </Container>
            </Route>
          <Route path='/app/popular' >
            <Container maxWidth='lg'>
              <Popular/>
            </Container>
          </Route>
            <Route path='/app/film/:id' component={FilmPage}/>
          <Route path='/app/search/' >
            <Container maxWidth='lg'>
            <SearchBar/>
          </Container>
          </Route>
          <Route path='/app/list/'  >
            <Container maxWidth='lg'>
              <FilmList component={FilmPage} />
            </Container>
          </Route>

            <Redirect to={'/app/home'}/>

        </Switch>
    );
};

export default Main;