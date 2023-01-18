import { combineReducers } from "redux";
import championListReducer from "./reducers/championListReducer";
import championDetailReducer from "./reducers/championDetailReducer";
import favListReducer from "./reducers/favListReducer"
import itemListReducer from "./reducers/itemListReducer";

const rootReducer = combineReducers({
  favListReducer: favListReducer,
  championListReducer: championListReducer,
  championDetailReducer: championDetailReducer,
  itemListReducer: itemListReducer
});

export default rootReducer;
