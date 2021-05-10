import {
  Avatar, Button, Card, CardActionArea, CardContent, Checkbox, CircularProgress, Grid, List, ListItem, ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { findIndex } from 'lodash';
import React, { useContext,  useState } from 'react';
import { GlobalContext } from 'src/components/Context/GlobalContext';
import FilmCard from 'src/components/FilmCard';




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

const FilmList = () => {
  const {like} = useContext(GlobalContext);
  // const [object, setObject] = useState(like);
  const classes = useStyles();

  const {
    addMovieToLike,
    removeMovieFromLike,
  } = useContext(GlobalContext);


  console.log("USE", like);


  const likeMovie = like.map(id => id.movie);

  // const getItemIdx = (id) => {
  //   const index = findIndex(like, function(obj) {
  //     return obj.type === id;
  //   })
  //   if (index !== -1) {
  //     return like[index]["movie"];
  //   }
  // }
  // console.log("FIND", getItemIdx(399566));

  console.log("LIKEMOVIE", likeMovie);
  return (
    <div     >
      <div >
        <div >
          <h1 >My Watchlist</h1>
          <span >
            {likeMovie.length} {likeMovie.length === 0 ? "Movie" : "Movies"}
          </span>
        </div>
        {likeMovie.length > 0 ? (
          <Grid container spacing={2}>
              {likeMovie.map(film => (
              <Grid item xs={3} key={film.id} >
                <FilmCard film={film}/>
              </Grid>
              ))}
          </Grid> ) : (
          <h2 >No movies in your list! Add some!</h2>
        )}
      </div>
    </div>

);

};

export default FilmList;







