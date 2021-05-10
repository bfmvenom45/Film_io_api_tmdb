import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import FilmCard from 'src/components/FilmCard';


const FilmList = ({ favourites, setFavourites, addToFavouritHandler }) => {


	return (
		<Box>
			<Grid container spacing={1}>
				<Grid item xs>
					<Typography variant={'h4'}>Избрание фильми</Typography>
					{favourites.length} {favourites.length === 1 ? 'Фильм' : 'Фильмов'}
				</Grid>
				<Grid container spacing={2}>
					{favourites.map((film, id) => (
						<Grid item xs={3} key={`${id}${film.id}`}>
							<FilmCard film={film} favourites={favourites} setFavourites={setFavourites}
							          addToFavouritHandler={addToFavouritHandler} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Box>


	);
};

export default FilmList;







