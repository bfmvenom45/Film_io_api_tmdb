export default (state, action) => {
	switch (action.type) {
		case "ADD_MOVIE_TO_LIKE":
			return {
				...state,
				like: [action.payload, ...state.like],
			};
		case "REMOVE_MOVIE_FROM_LIKE":
			return {
				...state,
				like: state.like.filter(
					(movie) => movie.id !== action.payload
				),
			};
		default:
			return state;
	}
};
