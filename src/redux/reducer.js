const defaultState = {
  menuActive: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return { ...state, menuActive: true };
    case 'CLOSE_MENU':
      return { ...state, menuActive: false };
    default:
      return state;
  }
};

export default reducer;