import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
// initial state

const initialState = {
	likelist: localStorage.getItem("likelist")
		? JSON.parse(localStorage.getItem("likelist"))
		: [],

};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	useEffect(() => {
		localStorage.setItem("likelist", JSON.stringify(state.likelist));
	}, [state]);

	// actions
	const addMovieTolikelist = (movie) => {
		dispatch({ type: "ADD_MOVIE_TO_LIKELIST", payload: movie });
	};

	const removeMovieFromlikelist = (id) => {
		dispatch({ type: "REMOVE_MOVIE_FROM_LIKELIST", payload: id });
	};



	const moveTolikelist = (movie) => {
		dispatch({ type: "MOVE_TO_LIKELIST", payload: movie });
	};



	return (
		<GlobalContext.Provider
			value={{
				likelist: state.likelist,
				addMovieTolikelist,
				removeMovieFromlikelist,
				moveTolikelist,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};
