import { championDetailItems } from "../initialValues/championDetailItems";
import { SET_TO_DETAIL } from "../actions/championDetailActions";

const initialState = {
  championDetailItems: championDetailItems
}

const championListReducer = (state=initialState, {type, payload}) => {
  switch(type) {
    case SET_TO_DETAIL:
      return {
        ...state,
        championDetailItems: [...payload]
      }
  
    default:
      return state;
  }
}

export default championListReducer;