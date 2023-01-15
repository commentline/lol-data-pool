import { cardItems } from "../initialValues/cardItems";
import { UPDATE_TO_CARD } from "../actions/cardActions";

const initialState = {
  cardItems: cardItems
}

const cardReducer = (state=initialState, {type, payload}) => {
  switch(type) {
    case UPDATE_TO_CARD:
      return {
        ...state,
        cardItems: [payload]
      }
  
    default:
      return state;
  }
}

export default cardReducer;