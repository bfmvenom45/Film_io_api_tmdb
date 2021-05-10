// import { useContext, useEffect, useState } from 'react';
// import App from 'src/App';
// // import { ContextFavourites, ContextProvider } from 'src/components/Context/contextFavourites';
// import useLocalStorage from 'src/hooks/useLocalStorage';
//
//  const useFavourites = () => {
//  	const [state, setState] = useState(App);
// 	 // const {setFavourites} = useContext(ContextProvider);
// 	 // const [localFavourites, setLocalFavourites] = useLocalStorage('favourites', []);
// 	 const [favourites, setFavourites] = useState(() => state);
//
// 	 useEffect(() => {
// 		 setState(favourites);
//
// 	 }, [favourites]);
//
// 	 const addFilmToFavourites = (film) => {
// 		 setFavourites(prevState => {
// 			 let collection = [];
// 			 collection.push(...prevState);
// 			 collection.push(film);
// 			 return collection;
// 		 });
// 	 };
// 	 const clearFavourites = () => {
// 		 setFavourites([]);
// 	 };
// 	 const removeFilmToFavourites = () => {
//
// 	 }
//
// 	 return {
// 	 	favourites,
// 		 setFavourites,
// 		 addFilmToFavourites,
// 		 removeFilmToFavourites,
// 		 clearFavourites,
// 	 };
//  }
// export default useFavourites;
