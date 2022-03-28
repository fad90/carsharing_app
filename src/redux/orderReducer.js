const defaultState = {
  cityOpen: false,
  pointOpen: false,
  inputCity: "",
  inputPoint: "",
  city: "",
  point: "",
  category: "Все модели",
  selectedCar: {
    model: "",
    priceMin: "",
    priceMax: "",
    id: "",
  },
  addition: {
    color: "",
    rate: "",
    dateFrom: null,
    dateTo: null,
    options: {
      fullTank: { name: "Полный бак, 500р", checked: false },
      childChair: { name: "Детское кресло, 200р", checked: false },
      rightWheel: { name: "Правый руль, 1600р", checked: false },
    },
  },
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
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SELECT_MODEL":
      return {
        ...state,
        selectedCar: { ...state.selectedCar, model: action.payload },
      };
    case "SELECT_MINPRICE":
      return {
        ...state,
        selectedCar: { ...state.selectedCar, priceMin: action.payload },
      };
    case "SELECT_MAXPRICE":
      return {
        ...state,
        selectedCar: { ...state.selectedCar, priceMax: action.payload },
      };
    case "SELECTCAR_ID":
      return {
        ...state,
        selectedCar: { ...state.selectedCar, id: action.payload },
      };
    case "SET_COLOR":
      return {
        ...state,
        addition: { ...state.addition, color: action.payload },
      };
    case "SET_RATE":
      return {
        ...state,
        addition: { ...state.addition, rate: action.payload },
      };
    case "SELECT_CHECKBOX":
      return {
        ...state,
        addition: {
          ...state.addition,
          options: { ...state.addition.options, ...action.payload },
        },
      };
    case "SET_DATE_FROM":
      return {
        ...state,
        addition: { ...state.addition, dateFrom: action.payload },
      };

    case "SET_DATE_TO":
      return {
        ...state,
        addition: { ...state.addition, dateTo: action.payload },
      };
    default:
      return state;
  }
};
