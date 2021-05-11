import { Box, Button, Grid, Typography } from '@material-ui/core';
import React, { useCallback } from 'react';
import FilmCard from 'src/components/FilmCard';

const FilmList = ({ favourites, setFavourites, addToFavoritHandler }) => {


	const addButtonHandler = useCallback(() => {
	}, []);

	const clearButtonHandler = () => {
		setFavourites([]);

	};


	return (
		<Box mt={6}>


			<Grid container spacing={1}>
				<Grid item xs>
					<Typography variant={'h4'}> Избранные фильмы {favourites.length > 0 && `(${favourites.length})`}:
					</Typography>
				</Grid>
				<Grid item xs={'auto'}>
					<Button onClick={clearButtonHandler}> Очистить</Button>

				</Grid>
			</Grid>

			<Grid container spacing={2}>
				{favourites.length > 0 ? favourites.map((film, index) => (
					<Grid item xs={3} key={`${index}${film.id}`}>
						<FilmCard film={film} setFavourites={setFavourites} favourites={favourites}
						          addToFavoritHandler={addToFavoritHandler} />
					</Grid>
				)) : (
					<Grid item xs={12}>
						<Box pt={12}>
							<Typography variant={'h6'} align='center'>
								Вы пока ничего не добавили в избранное
							</Typography>
						</Box>

					</Grid>
				)}
			</Grid>


			{/*{JSON.stringify(favourites)}*/}
		</Box>
	);
};

export default FilmList;