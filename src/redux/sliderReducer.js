const defaultState = {
  current: 0,
};

export const sliderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "NEXT_SLIDE":
      return { ...state, current: state.current + action.payload };
    case "PREV_SLIDE":
      return { ...state, current: state.current - action.payload };
    case "DOT_SLIDE":
      return { ...state, current: action.payload };
    case "FIRST_SLIDE":
      return { ...state, current: action.payload };
    case "LAST_SLIDE":
      return { ...state, current: action.payload };
    default:
      return state;
  }
};
