import fetchItems from "../../services/itemsService";

export const SET_TO_ITEM_LIST = "SET_TO_ITEM_LIST";

export const setItemList = () => {
  return async (dispatch) => {
    const items = await fetchItems();
    dispatch({
      type: SET_TO_ITEM_LIST,
      payload: Object.values(items)
    });
  };
}
