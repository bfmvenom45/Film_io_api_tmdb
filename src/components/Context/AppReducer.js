export default (state, action) => {
	switch (action.type) {
		case "ADD_MOVIE_TO_LIKELIST":
			return {
				...state,
				likelist: [action.payload, ...state.likelist],
			};
		case "REMOVE_MOVIE_FROM_LIKELIST":
			return {
				...state,
				likelist: state.likelist.filter(
					(movie) => movie.id !== action.payload
				),
			};
		default:
			return state;
	}
};
