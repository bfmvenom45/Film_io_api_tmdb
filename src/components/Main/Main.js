import { Container } from '@material-ui/core';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FilmList from 'src/pages/FilmList';
import FilmPage from 'src/pages/FilmPage';
import Home from 'src/pages/Home';
import Popular from 'src/pages/Popular';
import RecommendFilms from 'src/pages/RecommendFilms';
import SearchBar from 'src/pages/SearchBar';

const Main = ({ favourites, setFavourites, addToFavouritHandler }) => {
	return (
		<Switch>
			<Route path="/app/home" component={FilmPage} favourites={favourites} setFavourites={setFavourites} addToFavouritHandler={addToFavouritHandler}>
				<Container maxWidth="lg">
					<Home favourites={favourites} setFavourites={setFavourites} addToFavouritHandler={addToFavouritHandler} />
				</Container>
			</Route>
			<Route path="/app/popular">
				<Container maxWidth="lg">
					<Popular favourites={favourites} setFavourites={setFavourites} addToFavouritHandler={addToFavouritHandler} />
				</Container>
			</Route>
			<Route path='/app/film/:id'  component={FilmPage}>
				<FilmPage favourites={favourites} setFavourites={setFavourites} addToFavouritHandler={addToFavouritHandler} />
			</Route>
			<Route path="/app/search/">
				<Container maxWidth="lg">
					<SearchBar favourites={favourites} setFavourites={setFavourites} addToFavouritHandler={addToFavouritHandler} />
				</Container>
			</Route>
			<Route path="/app/list/" >
				<Container maxWidth="lg">
					<FilmList favourites={favourites} setFavourites={setFavourites} addToFavouritHandler={addToFavouritHandler} />
				</Container>
			</Route>


			<Redirect to={'/app/home' } />

		</Switch>
	);
};

export default Main;