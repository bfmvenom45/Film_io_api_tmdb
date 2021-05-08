import {
  Avatar, Card, CardActionArea, CardContent, Checkbox, CircularProgress, Grid, List, ListItem, ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { find } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from 'src/components/Context/GlobalContext';
import FilmCard from 'src/components/FilmCard';
import getItemId from 'src/services/testService';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1920,
    backgroundColor: theme.palette.background.paper,
  },
}));

const FilmList = () => {
  const params = useParams(FilmCard);
  const {like} = useContext(GlobalContext);
  const [state] = useState(like);

  const classes = useStyles();
  const [checked, setChecked] = useState([1]);
  const [loading, setLoading] = useState(true);



  // const handleToggle = (like) => () => {
  //   const currentIndex = checked.indexOf(like);
  //   const newChecked = [...checked];
  //
  //   if (currentIndex === -1) {
  //     newChecked.push(like);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //
  //   setChecked(newChecked);
  // };

  // function  getItemId(type) {
  //   const index = findIndex(like,  function(obj) {
  //     return obj.type === type;
  //   })
  //   if (index !== -1) {
  //     return like[index]["movie"];
  //   }
  // }
  // const listItems = find(state, function(item) {
  //   if (item.type === 'like') {
  //     return item.movie
  //   }
  // });
    // state.map((item) => <FilmCard film={item} />;
  // console.log('LIKE:', listItems)

  // console.log("NAME", getItemId('like'));
  // console.log("USE", setState);
  // console.log("USE", object);

  console.log("LIST", state);
  return (
    <div     >

        <Grid container spacing={2}>
            <Grid item xs={3}  >
              <div >
                <div >
                  <h1 >My Watchlist</h1>

                  <span >
            {like.length} {like.length === 1 ? "Movie" : "Movies"}
          </span>
                </div>

                {like.length > 0 ? (
                  <div >
                    { <FilmCard  film={`${ like.movie }${like.type}`} />
                    }
                  </div>
                ) : (
                  <h2 >No movies in your list! Add some!</h2>
                )}
              </div>
            </Grid>
        </Grid>


      {/*<div >*/}
      {/*  <div >*/}
      {/*    <div >*/}
      {/*      <h1 >My Watchlist</h1>*/}

      {/*      <span >*/}
      {/*      {state.length} {state.length === 1 ? "Movie" : "Movies"}*/}
      {/*    </span>*/}
      {/*    </div>*/}

      {/*    {state.length > 0 ? (*/}
      {/*      <div >*/}
      {/*        { <FilmCard  film={`${like.find(item => item.movie)} `} />*/}
      {/*        }*/}
      {/*      </div>*/}
      {/*    ) : (*/}
      {/*      <h2 >No movies in your list! Add some!</h2>*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*</div>*/}

    </div>


  );
};

export default FilmList;







