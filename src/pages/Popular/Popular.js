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
	const params = useParams();
	const [films, setFilms] = useState([]);
	const [hasError, setErrors] = useState(false);
	const [loading, setLoading] = useState(true);
	const [next, setNext] = useState(1);


	useEffect(() => {
		async function fetchData() {
			const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b96993fb25220304f950b534ddafb551&language=ru-RU&page=${next}`);
			res
				.json()
				.then(res => {
					setFilms(res.results);
					setLoading(false);
				})
				.then((json) => {
					 setNext(json);
				})
				.catch(err => {
					setErrors(err);
					setLoading(false);
				}).finally(

			);
		}

		fetchData();
	}, []);

	// function nextPage() {
	// 	setNext({
	// 		next: setNext(next + 1)
	// 	});
	// }

	console.log("NEXT:", next);
	return (
		<div>
			{loading ? <CircularProgress /> : (
				<Grid container spacing={2}>
					{films.map(film => (
						<Grid item xs={3} key={film.id}  style={{height: '100%'}}>
							<Card style={{height: '100%'}}>
								<CardActionArea>
									<CardContent component={Link} to={`/app/film/${film.id}`}>
										<img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}  style={{maxWidth: '100%'}}/>
										<Typography variant='body1' >{film.title}</Typography>

									</CardContent>
								</CardActionArea>

							</Card>
						</Grid>
					))}
				</Grid>

			) }
						<div>
							<Pagination  count={10} size="large" onClick={() => setNext(next +1)}/>

						</div>
		</div>
	);
};

export default Popular;