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

const FilmList = ({details}) => {
  const params = useParams();



  const classes = useStyles();
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  console.log(details)
  return (
    <List   dense className={classes.root}>
          <ListItem  button>
            <ListItemAvatar  >
              <Avatar
              src={`https://image.tmdb.org/t/p/w500/${details}`}  style={{maxWidth: '100%'}}
              />
            </ListItemAvatar>
            <ListItemText primary={`Line item ${details}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(details)}
                checked={checked.indexOf(details) !== -1}
                inputProps={'aria-labelledby'}
              />
            </ListItemSecondaryAction>
          </ListItem>


    </List>


  );
};

export default FilmList;
//
// import React, { useState, useEffect } from "react";
//
// function useCounter() {
//   const initialState = () =>
//     Number(window.localStorage.getItem("count") || null);
//   const [count, setCount] = useState(initialState);
//
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//
//   useEffect(() => window.localStorage.setItem("count", count), [count]);
//
//   return { count, increment, decrement };
// }
//
// export default function Counter() {
//   const { count, increment, decrement } = useCounter(5, 2);
//
//   return (
//     <div>
//       <div className="counter">{count}</div>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// }
