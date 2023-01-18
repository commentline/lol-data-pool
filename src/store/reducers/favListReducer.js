import { favListItems } from "../initialValues/favListItems";
import { UPDATE_TO_FAVORITE_LIST } from "../actions/favListActions";

const initialState = {
  favListItems: favListItems
}

const favListReducer = (state=initialState, {type, payload}) => {
  switch(type) {
    case UPDATE_TO_FAVORITE_LIST:
      const isChampionInList = state.favListItems.find(champion => champion.id === payload.id)
      if(isChampionInList) {
        localStorage.removeItem(payload.id);
        return {
          ...state,
          favListItems: [...state.favListItems.filter(champion => champion.id !== payload.id)]
        };
      }
      else {
        localStorage.setItem(payload.id, JSON.stringify(payload));  
        return {
          ...state, 
          favListItems: [...state.favListItems, payload]
        }
      }
    default:
      return state;
  }
}

export default favListReducer;

