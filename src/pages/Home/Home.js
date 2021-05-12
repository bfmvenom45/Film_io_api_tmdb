import React from 'react';
import Popular from 'src/pages/Popular';

const Home = ({favourites, setFavourites, addToFavouritHandler}) => {
    return (
        <div>
            <Popular favourites={favourites} setFavourites={setFavourites} addToFavouritHandler={addToFavouritHandler}/>
        </div>
    );
};

export default Home;