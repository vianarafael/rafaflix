import { combineReducers } from "redux";
import selectedMovieReducer from "./selectedMovie/selectedMovie-reducer";
import searchedFilmReducer from "./searched-film/searched-film.reducer";

export default combineReducers({
  selectedMovie: selectedMovieReducer,
  searchedFilm: searchedFilmReducer,
});
