const defaultState = {
  cityOpen: false,
  pointOpen: false,
  inputCity: "",
};

export const orderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "OPEN_CITY":
      return { ...state, cityOpen: !state.cityOpen };
    case "OPEN_POINT":
      return { ...state, pointOpen: !state.pointOpen };
    case "CITY_TEXT":
      return { ...state, inputCity: action.payload };
    default:
      return state;
  }
};
