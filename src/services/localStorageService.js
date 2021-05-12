const localStorage = window.localStorage;

export const getLocalFavourites = () => {
	if (!localStorage.getItem('favourites')) {
		localStorage.setItem('favourites', JSON.stringify([]));
	}
	return JSON.parse(localStorage.getItem('favourites'));
};

export const setLocalFavourites = (arr) => {
	return localStorage.setItem('favourites', JSON.stringify(arr));
};

export const clearFavourites = () => {
	return setLocalFavourites([]);
};

export const addFilmToFavourites = (film) => {
	console.log('Добавлєм фильм в избраное');
	let collection = getLocalFavourites();
	collection.push(film);
	return setLocalFavourites(collection);
};

// console.log(getLocalFavourites());