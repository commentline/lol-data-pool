export const UPDATE_TO_CARD = "UPDATE_TO_CARD";

export const updateToCard = card => {
  return {
    type: UPDATE_TO_CARD,
    payload: card
  }
}
