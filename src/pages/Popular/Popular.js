import { CircularProgress, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import FilmCard from 'src/components/FilmCard';
// import FetchService from 'src/services/fetchService';


const Popular = ({setFavourites, addToFavoritHandler, favourites}) => {
	const [films, setFilms] = useState([]);
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




	const pageHandler = (e, newPage) => {
		setPage(newPage)
	}

	return (
		<div>
			{loading ? <CircularProgress /> : (
				<Grid container spacing={2}>
					{films.map(film => (
						<Grid item xs={3} key={film.id} >
							<FilmCard film={film} setFavourites={setFavourites} favourites={favourites} addToFavoritHandler={addToFavoritHandler}/>
						</Grid>
					))}
				</Grid>
			)}
			<div>
				{ responce && !loading &&
				(	<Pagination
					page={responce.page}
					count={responce.total_pages}
					size="large"
					onChange={pageHandler}
				/> )
				}
			</div>
		</div>
	);
};

export default Popular;