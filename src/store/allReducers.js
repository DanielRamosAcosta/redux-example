import { combineReducers } from "redux";

import { exampleReducer } from "./exampleReducer";
import { searchMoviesReducer } from "./search-movies";

export const allReducers = combineReducers({
  example: exampleReducer,
  searchMovies: searchMoviesReducer
})