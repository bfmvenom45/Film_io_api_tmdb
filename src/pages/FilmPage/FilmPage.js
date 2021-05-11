import {
	Box, Button, Chip, Container, Divider, Grid, Link, ListItem, ListItemIcon, ListItemText, Typography,
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CalendarIcon, ClockIcon, CursorClickIcon, FireIcon, TagIcon } from 'src/Icons';
import RecommendFilms from 'src/pages/RecommendFilms';
import noise from './noise.png';

const useStyles = makeStyles((theme) => ({
	cover: {
		borderRadius: 14,
		border: `1px solid ${fade('#fff', 0.4)}`,
		position: 'relative',
		zIndex: 5,
		marginBottom: '-80%',

	},
	header: {
		background: 'gray',
		position: 'relative',
		paddingTop: 150,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		color: '#fff',
		backgroundPosition: '50% 50%',

	},
	backdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		background: fade('#000', 0.1),
		backdropFilter: 'blur(20px) saturate(120%)',
		backgroundImage: `linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)`,

	},
	backdrop2: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundImage: `url(${noise})`,
		opacity: 0.15,

	},
	container: {
		position: 'relative',
		zIndex: 2,
		paddingBottom: 50,

	},
	container2: {
		minHeight: 300,
		marginBottom: '3rem',
		paddingTop: 50,

	},
	icon: {
		color: '#fff',
	},
	title: {
		color: '#94A3B8',
		textTransform: 'uppercase',
		fontSize: 20,

	},
	overview: {
		color: '#475569',
	},
	blur:{
		position: 'absolute',
		filter: 'blur(50px)',
		left: 10,
		top: 20,
		opacity: 0.5,
		zIndex: -1,
	},
	boxBlur:{
		position: 'relative',
	}
}));
const FilmPage = ({setFavourites, favourites, addToFavouritHandler}) => {

	const classes = useStyles();
	const params = useParams();
	const [details, setDetails] = useState({});
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b96993fb25220304f950b534ddafb551&language=ru-RU`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setDetails(data);
				setLoading(false);
			});
	}, [params,  ]
	);


	console.log(details);
	return (
		<div>
			{
				loading ? 'Загрузка...' : (
					<div>
						<div className={classes.header}
						     style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details.backdrop_path})` }}>
							<div className={classes.backdrop} />
							<div className={classes.backdrop2} />
							<Container maxWidth={'lg'} className={classes.container}>
								<Grid container spacing={5}>
									<Grid item  xs={12} sm={3} className={classes.left}>
										<Box className={classes.boxBlur}>
											<img className={classes.cover} src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
											     style={{ maxWidth: '100%' }} />
											<img  className={classes.blur} src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
											      style={{ maxWidth: '100%' }} />
										</Box>
									</Grid>
									<Grid item xs={9} className={classes.rigth}>
										<Typography variant="h4">
											{details.title}
										</Typography>
										<Box my={3}>
											<Rating max={10} defaultValue={details.vote_average} icon={<FireIcon/>} name={'rating'} />
											<Typography>({details.vote_count} голосов)</Typography>
											<Grid container spacing={2}>
												<Grid item xs={'auto'}>
													<ListItem disableGutters>
														<Box mr={1}>
															<CalendarIcon className={classes.icon} />
														</Box>
														<ListItemText primary={details.release_date} />
													</ListItem>
												</Grid>
												<Grid item xs={'auto'}>
													<ListItem disableGutters>
														<Box mr={1}>
															<ClockIcon className={classes.icon} />
														</Box>
														<ListItemText primary={`${details.runtime} мин`} />
													</ListItem>
												</Grid>
												<Grid item xs>
													<ListItem disableGutters>
														<Box mr={1}>
															<TagIcon className={classes.icon} />
														</Box>
														<ListItemText
															primary={details && details?.genres.length > 0 && details.genres.map(id => id.name).join(', ')} />
													</ListItem>
												</Grid>
												<Grid item xs={'auto'}>
													<Button variant={'contained'}  startIcon={<CursorClickIcon />}
													        href={details.homepage}>Официальный сайт</Button>
												</Grid>
											</Grid>
										</Box>
									</Grid>
								</Grid>
							</Container>
						</div>
						<div>
							<Container>
								<Grid container spacing={5} maxWidth={'lg'} className={classes.container2}>
									<Grid item xs={3}>

									</Grid>
									<Grid item xs={9}>
										<Typography  className={classes.title}>Описание</Typography>
										<Typography className={classes.overview} variant="subtitle1">
											{details.overview}
										</Typography>
									</Grid>
								</Grid>
								<Divider />
								<RecommendFilms favourites={favourites} setFavourites={setFavourites} addToFavouritHandler={addToFavouritHandler} />
							</Container>
						</div>


					</div>
				)
			}

		</div>
	);
};

export default FilmPage;