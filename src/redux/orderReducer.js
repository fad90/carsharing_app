const defaultState = {
  cityOpen: false,
  pointOpen: false,
  inputCity: "",
  inputPoint: "",
  city: "",
  point: "",
};

export const orderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "OPEN_CITY":
      return { ...state, cityOpen: !state.cityOpen };
    case "OPEN_POINT":
      return { ...state, pointOpen: !state.pointOpen };
    case "CITY_TEXT":
      return { ...state, inputCity: action.payload };
    case "POINT_TEXT":
      return { ...state, inputPoint: action.payload };
    case "ADD_CITY":
      return { ...state, city: action.payload };
    case "ADD_POINT":
      return { ...state, point: action.payload };
    default:
      return state;
  }
};
