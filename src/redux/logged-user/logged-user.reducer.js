const INITIAL_STATE = {
  user: null,
};

const logUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LOGGED_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default logUserReducer;
