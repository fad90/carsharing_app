import { createStore, combineReducers, applyMiddleware } from "redux";
import { burgerReducer } from "./burgerReducer";
import { sliderReducer } from "./sliderReducer";
import { dataReducer } from "./dataReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  sliderReducer,
  burgerReducer,
  dataReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
