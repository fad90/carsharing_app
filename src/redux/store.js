import { createStore, combineReducers } from "redux";
import { burgerReducer } from "./burgerReducer";
import { sliderReducer } from "./sliderReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  sliderReducer,
  burgerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
