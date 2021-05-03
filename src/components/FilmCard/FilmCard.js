import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const FilmCard = ({film}) => {

	return (
    <Card style={{height: '100%'}}>
      <CardActionArea>
        <CardContent component={Link} to={`/app/film/${film.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}  style={{maxWidth: '100%'}}/>
          <Typography variant='body1' >{film.title}</Typography>

        </CardContent>
      </CardActionArea>

    </Card>
	);
};

export default FilmCard;