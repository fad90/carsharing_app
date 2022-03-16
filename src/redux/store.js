import { createStore, combineReducers, applyMiddleware } from "redux";
import { burgerReducer } from "./burgerReducer";
import { sliderReducer } from "./sliderReducer";
import { dataReducer } from "./dataReducer";
import { orderReducer } from "./orderReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  sliderReducer,
  burgerReducer,
  dataReducer,
  orderReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
