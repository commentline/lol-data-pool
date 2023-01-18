import { championListItems } from "../initialValues/championListItems";
import { SET_TO_CHAMPION_LIST } from "../actions/championListActions";

const initialState = {
  championListItems: championListItems
}

const championListReducer = (state=initialState, {type, payload}) => {
  switch(type) {
    case SET_TO_CHAMPION_LIST:
      return {
        ...state,
        championListItems: [...payload]
      }
  
    default:
      return state;
  }
}

export default championListReducer;