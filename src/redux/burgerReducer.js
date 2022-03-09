const defaultState = {
  menuActive: false,
};

export const burgerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return {...state, menuActive: true};
    case "CLOSE_MENU":
      return {...state, menuActive: false};
    default:
      return state;
  }
};
