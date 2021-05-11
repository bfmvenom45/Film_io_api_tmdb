import { Box, CircularProgress, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FilmCard from 'src/components/FilmCard';


const RecommendFilms = ({ setFavourites, favourites, addToFavouritHandler }) => {

	const params = useParams();
	const [recommend, setRecommend] = useState({});
	const [hasError, setErrors] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=b96993fb25220304f950b534ddafb551&language=ru-RU&page=1}`);
			res
				.json()
				.then(res => {
					setRecommend(res.results.slice(0, 4));
					setLoading(false);
				})
				.catch(err => {
					setErrors(err);
					setLoading(false);
				}).finally(

			);
		}

		fetchData();
	}, [params]);


	return (
		<Box my={6}>
			{loading ? <CircularProgress /> : (
				<Grid container spacing={2}>
					{recommend.map(film => (
						<Grid item xs={3} key={film.id}>
							<FilmCard film={film} addToFavouritHandler={addToFavouritHandler} favourites={favourites}
							          setFavourites={setFavourites} />
						</Grid>
					))}
				</Grid>

			)}
		</Box>
	);
};

export default RecommendFilms;