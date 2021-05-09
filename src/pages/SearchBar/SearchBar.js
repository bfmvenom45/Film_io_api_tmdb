import { Card, CardContent, CircularProgress, Grid, TextField, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import FilmCard from 'src/components/FilmCard';

const useStyles = makeStyles((theme) => ({
	loadingContainer: {
		width: '100%',
		minHeight: '50vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',


	},
}));

const SearchBar = () => {
	const classes = useStyles();

	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState('');
	const [responce, setResponce] = useState({});


	useEffect(() => {
		async function fetchSearch() {
			setLoading(true);
			await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b96993fb25220304f950b534ddafb551&language=en-US&query=${search.split(' ').join('+')}&page=1`)
				.then(data => data.json())
				.then(data => {
					const result = data.results;
					setResponce(result);
					setLoading(false);
				});
		}

		if (search) {
			fetchSearch();
		}
	}, [search]);

	const searchHandler = (event) => {
		setSearch(event.target.value);
	};
	const loadingComponent = <Card
		className={classes.loadingContainer}>
		<CardContent>
			<CircularProgress />
		</CardContent>
	</Card>;
	const enterSearch = <Card
    className={classes.loadingContainer}>
    <CardContent>
      <Typography variant={'h6'}>Введите название для поиска</Typography>
    </CardContent>
  </Card>;
	const nothingFound =<Card
    className={classes.loadingContainer}>
    <CardContent>
      <Typography variant={'h6'}>Ничего не найдено</Typography>
    </CardContent>
  </Card>;


	return (

		<div>
			<Box my={6}>
				<Card>
					<CardContent>
						<TextField
							label={'Поиск по названию фильма'}
							fullWidth
							variant={'filled'}
							placeholder="Поиск..."
							value={search}
							onChange={searchHandler}
						/>
					</CardContent>
				</Card>
			</Box>
			{loading ? loadingComponent : !search ? enterSearch : responce.length > 0 ? (
				<Grid container spacing={2}>
					{responce.map(films => (
						<Grid item xs={3} key={films.id}>
							<FilmCard film={films} />
						</Grid>
					))}
				</Grid>
			) : nothingFound}
		</div>
	);

};


export default SearchBar;