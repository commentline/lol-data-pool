import { combineReducers } from "redux";
import favListReducer from "./reducers/favListReducer"

const rootReducer = combineReducers({
  favListReducer: favListReducer
});

export default rootReducer;
