import { Container } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import FilmList from 'src/pages/FilmList';
import FilmPage from 'src/pages/FilmPage';
import Home from 'src/pages/Home';
import Popular from 'src/pages/Popular';
import SearchBar from 'src/pages/SearchBar';

const Main = ({favourites, setFavourites, addToFavoritHandler}) => {
    return (
        <Switch>
            <Route path='/app/home'>
              <Container maxWidth='lg'>
                <Home favourites={favourites} setFavourites={setFavourites} addToFavoritHandler={addToFavoritHandler}/>
              </Container>
            </Route>
          <Route path='/app/popular' >
            <Container maxWidth='lg'>
              <Popular favourites={favourites} setFavourites={setFavourites} addToFavoritHandler={addToFavoritHandler}/>
            </Container>
          </Route>
          <Route path='/app/film/:id'  >
            <FilmPage favourites={favourites} setFavourites={setFavourites} addToFavoritHandler={addToFavoritHandler} />
          </Route>
          <Route path='/app/search/' >
            <Container maxWidth='lg'>
            <SearchBar favourites={favourites} setFavourites={setFavourites} addToFavoritHandler={addToFavoritHandler}/>
          </Container>
          </Route>
          <Route path='/app/list/' >
            <Container maxWidth='lg'>
              <FilmList favourites={favourites} setFavourites={setFavourites} addToFavoritHandler={addToFavoritHandler}/>
            </Container>
          </Route>

            <Redirect to={'/app/home'} />

        </Switch>
    );
};

export default Main;