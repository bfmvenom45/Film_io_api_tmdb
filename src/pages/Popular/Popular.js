import {
	Avatar, Button, Card, CardActionArea, CardContent, CardMedia, Chip, CircularProgress, Grid, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';

// import FetchService from 'src/services/fetchService';


const Popular = () => {
	// const fetchService = new FetchService();
	// eslint-disable-next-line no-undef
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

	console.log('PAGE:', page);
	console.log('RES:', responce);
	return (
		<div>
			{loading ? <CircularProgress /> : (
				<Grid container spacing={2}>
					{films.map(film => (
						<Grid item xs={3} key={film.id} style={{ height: '100%' }}>
							<Card style={{ height: '100%' }}>
								<CardActionArea>
									<CardContent component={Link} to={`/app/film/${film.id}`}>
										<img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} style={{ maxWidth: '100%' }} />
										<Typography variant="body1">{film.title}</Typography>

									</CardContent>
								</CardActionArea>

							</Card>
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