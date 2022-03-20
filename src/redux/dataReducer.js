const defaultState = {
  cities: [],
  points: [],
  cars: [],
  category: [],
  rate: [],
};

export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CITIES":
      return { ...state, cities: [...state.cities, ...action.payload] };
    case "ADD_POINTS":
      return { ...state, points: [...state.points, ...action.payload] };
    case "ADD_CARS":
      return { ...state, cars: [...state.cars, ...action.payload] };
    case "ADD_CATEGORY":
      return { ...state, category: [...state.category, ...action.payload] };
    case "ADD_RATE":
      return { ...state, rate: [...state.rate, ...action.payload] };
    default:
      return state;
  }
};
