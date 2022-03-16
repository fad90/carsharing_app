const defaultState = {
  cities: [],
  points: [],
};

export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CITIES":
      return { ...state, cities: [...state.cities, ...action.payload] };
    case "ADD_POINTS":
      return { ...state, points: [...state.points, ...action.payload] };
    default:
      return state;
  }
};
