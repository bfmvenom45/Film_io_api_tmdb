import { Avatar, Button, Card, CardActionArea, CardContent, Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { findIndex } from 'lodash';
import React, { createContext, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { GlobalContext } from 'src/components/Context/GlobalContext';
import { FireIcon, HeartIcon } from 'src/Icons';
import getGenreName from 'src/services/genresService';
import getItemId from 'src/services/testService';

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
const FilmCard = ({ film }) => {
	const classes = useStyles();
	const {
		like,
		addMovieToLike,
		removeMovieFromLike
	} = useContext(GlobalContext);
	const [localState, setLocalState] = useLocalStorage('id', {});

	function getItemIdx(id){
		const index = findIndex(like, function(obj) {
			return obj.type === id;
		})
		if (index !== -1) {
			return like[index]["movie"];
		}
	}
	const favoriteButtonHandler = (type, movie) => {
		addMovieToLike(type.target.map(id => getItemIdx(id)))
	}

	// console.log('NAme1:', `/app/film/${getItemId('id')}`)

	return (
		<Card item xs={12} sm={3} className={classes.card}>
			<Button startIcon={<HeartIcon />}
			        onClick={(e) => setLocalState(e.target.film)}
			> </Button>
			<Button startIcon={<FireIcon />}
			        onClick={() => removeMovieFromLike(film)}
			> </Button>
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

