import { Card, CardActionArea, CardContent, Chip, CircularProgress, Grid, List, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const RecommendFilms = () => {
  const params = useParams();
  const [recommend, setRecommend] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const res = async fetch(`https://api.themoviedb.org/3/movie/${params}/recommendations?api_key=b96993fb25220304f950b534ddafb551&language=ru-RU&page=1`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json()
      .then((data) =>{
        setRecommend(data);
        setLoading(false);

      });
  }, []);

  console.log("FILMIER", recommend.page);



  return (
    <div>
      {
        loading ? 'Загрузка...'  : (
          <div>
            {recommend && recommend?.results.length > 0  && recommend.results.map(item =>(
              <List>{}</List>
              )
            )}

          </div>
        )
      }
    </div>
};

export default RecommendFilms;