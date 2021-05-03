import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SearchBar = () => {
  // const [searchItem, setSearchItem] = useState("");
  const params = useParams();
  const [hasError, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');


  useEffect(() => {
    async function fetchSearch() {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b96993fb25220304f950b534ddafb551&language=en-US&query=${search.split(' ').join("+")}&page=1`
      );
       res
         .json()
        .then(res => {
          setSearch(res);
          setLoading(false);
        })
        .catch(err => {
          setErrors(err);
          setLoading(false);
        });
    }
      fetchSearch();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value)
  }

console.log("SEARCH", setSearch)
  return (
    <div>
      <TextField
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />

    </div>
  );

};


export default SearchBar;