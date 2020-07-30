const INITIAL_STATE = {
  searchedFilm: null,
};

const searchedFilmReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SEARCHED_FILM":
      return {
        ...state,
        searchedFilm: action.payload,
      };
    default:
      return state;
  }
};

export default searchedFilmReducer;
