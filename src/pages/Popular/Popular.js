import {
	Box,
	CircularProgress, Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Pagination } from '@material-ui/lab';
import FilmCard from 'src/components/FilmCard';
const useStyles = makeStyles((theme) => ({
	pagination: {
		marginTop: 20,
		display: 'flex',
		justifyContent: 'center',
		marginBottom: 20,
	},
}));

const Popular = ({ setFavourites, favourites, addToFavouritHandler }) => {
	const classes = useStyles();
	const [films, setFilms] = useState({});
	const [hasError, setErrors] = useState(false);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [responce, setResponce] = useState({});

	useEffect(() => {
		async function fetchData() {
			const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b96993fb25220304f950b534ddafb551&language=ru-RU&page=${page}`);
			res
				.json()
				.then(res => {
					setFilms(res.results);
					setResponce(res);
					setLoading(false);
				})
				.catch(err => {
					setErrors(err);
					setLoading(false);
				}).finally(

			);
		}

		fetchData();
	}, [page]);


// console.log('GENRE',  getGenreName(16));


	const pageHandler = (e, newPage) => {
		setPage(newPage);
	};

	return (
		<Box my>
			{loading ? <CircularProgress /> : (
				<Grid container spacing={2}>
					{films.map(film => (
						<Grid item xs={3} key={film.id}>
							<FilmCard film={film} setFavourites={setFavourites} favourites={favourites}
							          addToFavouritHandler={addToFavouritHandler} />
						</Grid>
					))}
				</Grid>
			)}
			<Box className={classes.pagination} >
				{responce && !loading &&
				(<Pagination
				             page={responce.page}
				             count={responce.total_pages}
				             size="large"
				             onChange={pageHandler}
				/>)
				}
			</Box>
		</Box>
	);
};

export default Popular;