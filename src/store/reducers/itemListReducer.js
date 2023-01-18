import { itemListItems } from "../initialValues/itemListItems";
import { SET_TO_ITEM_LIST } from "../actions/itemListActions";

const initialState = {
  itemListItems: itemListItems
}

const itemListReducer = (state=initialState, {type, payload}) => {
  switch(type) {
    case SET_TO_ITEM_LIST:
      return {
        ...state,
        itemListItems: [...payload]
      }
  
    default:
      return state;
  }
}

export default itemListReducer;