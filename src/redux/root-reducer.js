import { combineReducers } from 'redux';
import selectedMovieReducer from './selectedMovie/selectedMovie-reducer';
import searchedFilmReducer from './searched-film/searched-film.reducer';
import selectedActorReducer from './selectedActor/selectedActor.reducer';
import logUserReducer from './logged-user/logged-user.reducer';

export default combineReducers({
  selectedMovie: selectedMovieReducer,
  searchedFilm: searchedFilmReducer,
  selectedActor: selectedActorReducer,
  logUser: logUserReducer,
});
