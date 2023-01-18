import { fetchChampionList } from "../../services/championsService";

export const SET_TO_CHAMPION_LIST = "SET_TO_CHAMPION_LIST";

export const setChampionList = () => {
  return async (dispatch) => {
    const champions = await fetchChampionList();
    dispatch({
      type: SET_TO_CHAMPION_LIST,
      payload: Object.values(champions)
    });
  };
}
