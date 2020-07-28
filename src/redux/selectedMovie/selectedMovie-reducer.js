const INITIAL_STATE = {
  selectedMovie: null,
};

const selectedMovieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SELECTED_MOVIE":
      return {
        ...state,
        selectedMovie: action.payload,
      };
    default:
      return state;
  }
};

export default selectedMovieReducer;
