import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { findIndex } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import getGenreName from 'src/services/genresService';


const useStyles = makeStyles((theme) => ({
	avatar: {
		borderRadius: 12,
		width: '100%',
		maxWidth: '100%',
		height: 400,
		marginBottom: '2rem',
	},
	card: {
		position: 'relative',
		height: '100%',
		boxShadow: 'none',
		textAlign: 'center',
		transition: '0.1s cubic-bezier(.17,.67,.83,.67)',
		'&:hover': {
			boxShadow: '0px 14px 74px -20px rgba(51, 65, 85, 0.49)',
			zIndex: 10,
		},


	},

}));
const FilmCard = ({ film, favourites, setFavourites, addToFavouritHandler }) => {
	const classes = useStyles();


	const index = findIndex(favourites, (o) => o.id === film.id);

	const removeFromFavourites = (film) => {
		setFavourites(favourites.filter(item => item.id !== film.id));
	};
	return (
		<Card className={classes.card}>
			<CardActions>{
				index > -1
					? (<Button variant="contained" fullWidth color="secondary"
					           onClick={() => removeFromFavourites(film)}>Удалить</Button>)
					: (<Button variant="contained" fullWidth color="primary"
					           onClick={() => addToFavouritHandler(film)}>Добавить</Button>)

			}


			</CardActions>
			<CardActionArea style={{ height: '100%' }} component={Link} to={`/app/film/${film.id}`}>
				<CardContent>
					<Avatar src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} className={classes.avatar} />
					<Typography variant={'subtitle1'} align={'center'}>{film.title}</Typography>
					<Typography variant={'caption'} color={'textSecondary'} align={'center'}
					            noWrap>{film.genre_ids.map(id => getGenreName(id)).join(', ')}</Typography>
				</CardContent>
			</CardActionArea>

		</Card>
	);
};
export default FilmCard;