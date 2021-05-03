import React, { useEffect, useState } from 'react';

const SearchBar = () => {

  const [search, setSearch] = useState("");
  const [hasError, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    async function fetchSearch() {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b96993fb25220304f950b534ddafb551&language=en-US&query=${search}&page=1`
      );
       res
         .json()
        .then(res => {
          setSearch(res.results);
          setLoading(false);
        })
        .catch(err => {
          setErrors(err);
          setLoading(false);
        });
    }

    fetchSearch();
  }, []);


  return (
    <div>
      value={{
        search,
        setSearch
    }}
    </div>
  );
};

export default SearchBar;