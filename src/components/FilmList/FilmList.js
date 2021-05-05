import {
  Avatar, Card, CardActionArea, CardContent, Checkbox, List, ListItem, ListItemAvatar, ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1920,
    backgroundColor: theme.palette.background.paper,
  },
}));

const FilmList = ({film}) => {
  const params = useParams();



  const classes = useStyles();
  const [checked, setChecked] = useState([1]);

  const handleToggle = (film) => () => {
    const currentIndex = checked.indexOf(film);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(film);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
console.log("LIST", params)
  return (
    <List component={Link}   dense className={classes.root}>
          <ListItem  button>
            <ListItemAvatar  >
              <Avatar
              src={`https://image.tmdb.org/t/p/w500/${film}`}  style={{maxWidth: '100%'}}
              />
            </ListItemAvatar>
            <ListItemText primary={`Line item ${film}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(film)}
                checked={checked.indexOf(film) !== -1}
                inputProps={'aria-labelledby'}
              />
            </ListItemSecondaryAction>
          </ListItem>


    </List>


  );
};

export default FilmList;







