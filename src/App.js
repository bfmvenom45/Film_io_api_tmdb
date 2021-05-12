import React, { useEffect, useState } from 'react';
import { findIndex } from 'lodash';
import {Container, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import { getLocalFavourites, setLocalFavourites } from 'src/services/localStorageService';
import {theme} from "src/theme/theme";
import Navbar from "src/components/Navbar";
import ErrorBoundary from "src/components/ErrorBoundaries";
import Main from "src/components/Main";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {

  const [favourites, setFavourites] = useState(() => getLocalFavourites());

  const addToFavouritHandler = (film) => {
    const index = findIndex(favourites, (o) => o.id === film.id);
    if (index < 0) {
      setFavourites(prevState => ([...prevState, film]));
    }
  };

  useEffect(() => {
    setFavourites(favourites);
    setLocalFavourites(favourites);
  }, [favourites])

  return (

        <Router >
          <MuiThemeProvider theme={theme}>
            <ErrorBoundary>
              <CssBaseline/>
              <Navbar favourites={favourites} setFavourites={setFavourites} addToFavouritHandler={addToFavouritHandler}/>

              <Main favourites={favourites} setFavourites={setFavourites} addToFavouritHandler={addToFavouritHandler}/>
            </ErrorBoundary>
          </MuiThemeProvider>
        </Router>



    );
}

export default App;
