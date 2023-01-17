export const UPDATE_TO_FAVORITE_LIST = "UPDATE_TO_FAVORITE_LIST";

export const updateToFavoriteList = card => {
  return {
    type: UPDATE_TO_FAVORITE_LIST,
    payload: card
  }
}
