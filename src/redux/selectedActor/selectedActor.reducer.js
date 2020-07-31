const INITIAL_STATE = {
  selectedActor: null,
};

const selectedActorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SELECTED_ACTOR':
      return {
        ...state,
        selectedActor: action.payload,
      };
    default:
      return state;
  }
};

export default selectedActorReducer;
