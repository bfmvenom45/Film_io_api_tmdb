import {  CircularProgress, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import FilmCard from 'src/components/FilmCard';

const SearchBar = () => {


  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [responce, setResponce] = useState({});



  useEffect(() => {
      async function fetchSearch() {
         await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b96993fb25220304f950b534ddafb551&language=en-US&query=${search.split(' ').join("+")}&page=1`)
           .then(data => data.json())
          .then(data => {
            const result = data.results;
            setResponce(result)
            setLoading(false);
          })
      }
  if (search) {
    fetchSearch();
  }
  }, [search]);

const searchHandler = (event) => {
  setSearch(event.target.value);
}
const LoadingComponent = <CircularProgress/>;
const EnterSearch = <h2>Введите название для поиска </h2>;
const NothingFound = <h2>Ничего не найдено</h2>;

  return (

    <div>
      <TextField
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />
      {loading ? LoadingComponent : !search ? EnterSearch  : !responce.length > false ?  NothingFound  :  (
        <Grid container spacing={2}>
          {responce.map(film => (
            <Grid item xs={3} key={film.id}  style={{height: '100%'}}>
              <FilmCard film={film} />
            </Grid>
          ))}
        </Grid>

      ) }

    </div>
  );

};


export default SearchBar;