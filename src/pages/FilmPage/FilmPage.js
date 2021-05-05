import { Box, Chip, Container, Grid, Typography } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecommendFilms from 'src/pages/RecommendFilms';

const useStyles = makeStyles((theme) => ({
cover:{
  borderRadius: 14,
  border: `1px solid ${fade('#fff', 0.4)}`,
  position: 'relative',
  zIndex: 5,
  marginBottom: '-80%',

},
  header:{
  background: 'gray',
    position: 'relative',
    paddingTop: 150,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: fade('#000', 0.1),
    backdropFilter: 'blur(20px)',
    backgroundImage:  `linear-gradient(360deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)`,

  },
  container:{
    position: 'relative',
    zIndex: 2,
    paddingBottom: 50,

  },
  container2:{
  minHeight: 300,
    marginBottom: '3rem',
    paddingTop: 50,

  }
}));
const FilmPage = () => {
  const classes = useStyles();
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
  }, [params]);


console.log(details);
    return (
        <div>
          {
            loading ? 'Загрузка...'  : (
              <div>
                <div className={classes.header} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details.backdrop_path})`}}>
                  <div className={classes.backdrop}/>
                  <Container maxWidth={'lg'} className={classes.container}>
                    <Grid container spacing={5} >
                      <Grid item xs={3} className={classes.left}>
                        <img className={classes.cover} src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}  style={{maxWidth: '100%'}}/>
                      </Grid>
                      <Grid item xs={9} className={classes.rigth}>
                        <Typography variant='h4' >
                          {details.title}
                        </Typography>
                        <Box my={3}>
                          <Rating max={10} defaultValue={details.vote_average} name={'rating'} />
                          <Typography>({details.vote_count} голосов)</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
                <div>
                  <Container>
                    <Grid container spacing={5} maxWidth={'lg'} className={classes.container2} >
                      <Grid item xs={3} >

                      </Grid>
                      <Grid item xs={9} >

                        <Typography variant='body1' >
                          {details.overview}
                        </Typography>

                        {details && details?.genres.length > 0  && details.genres.map(item =>(
                            <Chip label={item.name} key={item.id}/>
                          )
                        )}
                        {details && details?.production_companies.length > 0  && details.production_companies.map(item =>(
                            <Chip label={item.name} key={item.id}/>
                          )
                        )}
                      </Grid>
                  </Grid>

                    <RecommendFilms/>
                  </Container>
                </div>




              </div>
            )
          }

        </div>
    );
};

export default FilmPage;