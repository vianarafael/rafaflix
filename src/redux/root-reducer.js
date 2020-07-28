import { combineReducers } from "redux";
import selectedMovieReducer from "./selectedMovie/selectedMovie-reducer";

export default combineReducers({
  selectedMovie: selectedMovieReducer,
});
