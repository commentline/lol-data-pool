import { combineReducers } from "redux";
import cartReducer from "./reducers/cardReducer"

const rootReducer = combineReducers({
  cardReducer: cartReducer
});

export default rootReducer;
