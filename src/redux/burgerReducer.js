const defaultState = {
  menuActive: false,
  EngLanguage: true,
};

export const burgerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { ...state, menuActive: true };
    case "CLOSE_MENU":
      return { ...state, menuActive: false };
    case "CHANGE_LANG":
      return { ...state, EngLanguage: !state.EngLanguage };
    default:
      return state;
  }
};
