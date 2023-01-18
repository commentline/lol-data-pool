import { fetchChampionDetail } from "../../services/championsService";

export const SET_TO_DETAIL = "SET_TO_DETAIL";

export const setChampionDetail = championName => {
  return async (dispatch) => {
    const champions = await fetchChampionDetail(championName);
    dispatch({
      type: SET_TO_DETAIL,
      payload: Object.values(champions)
    });
  };
}
