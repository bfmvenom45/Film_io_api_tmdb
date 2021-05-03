import {  Chip, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FilmPage = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b96993fb25220304f950b534ddafb551&language=ru-RU`)
      .then((res) => {
        return res.json();
      })
      .then((data) =>{
        setDetails(data);
        setLoading(false);
      });
  }, []);



    return (
        <div>
          {
            loading ? 'Загрузка...'  : (
              <div>
                <Typography variant='h4' >
                  {details.title}
                </Typography>
                <Typography variant='body1' >
                  {details.overview}
                </Typography>
                {/*<img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}  style={{maxWidth: '100%'}}/>*/}
                <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}  style={{maxWidth: '100%'}}/>
                {details && details?.genres.length > 0  && details.genres.map(item =>(
                    <Chip label={item.name} key={item.id}/>
                  )
                )}
                {details && details?.production_companies.length > 0  && details.production_companies.map(item =>(
                    <Chip label={item.name} key={item.id}/>
                  )
                )}


              </div>
            )
          }
        </div>
    );
};

export default FilmPage;