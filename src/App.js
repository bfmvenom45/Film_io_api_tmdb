import { findIndex } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { getLocalFavourites, localStorageInit, setLocalFavourites } from 'src/services/localStorageService';
import { theme } from 'src/theme/theme';
import Navbar from 'src/components/Navbar';
import ErrorBoundary from 'src/components/ErrorBoundaries';
import Main from 'src/components/Main';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

	const [favourites, setFavourites] = useState(() => getLocalFavourites());


	const addToFavoritHandler = (film) => {
		const index = findIndex(favourites, (o) => o.id === film.id);
		if (index < 0) {
			setFavourites(prevState => ([...prevState, film]));
		}
	};


	useEffect(() => {
		setFavourites(favourites);
		setLocalFavourites(favourites);
	}, [favourites]);


	return (
		<Router>
			<MuiThemeProvider theme={theme}>
				<ErrorBoundary>
					<CssBaseline />
					<Navbar favourites={favourites} />

					<Main favourites={favourites} setFavourites={setFavourites} addToFavoritHandler={addToFavoritHandler} />
				</ErrorBoundary>
			</MuiThemeProvider>
		</Router>


	);
}

export default App;
