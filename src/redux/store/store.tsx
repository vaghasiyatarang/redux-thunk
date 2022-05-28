import { createStore, combineReducers, applyMiddleware } from "redux";

import { reducer } from "../reducer/reducer";
import cartReducer from "../reducer/cartReducer";
import { menudataReducer } from "../reducer/menudataReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {};
const rootReducer = combineReducers({
  userList: reducer,
  cartCount: cartReducer,
  menuData: menudataReducer,
});

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
