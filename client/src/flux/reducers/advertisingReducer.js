export const advertisingReducer = (state = { cardItemData: [] }, action) => {
  switch (action.type) {
    case "ADD_CART_IMAGE":
      return {
        ...state,
        cardItemData: action.payload,
      };
    case "CLEAR_CARD_IMAGE":
      return { ...state, cardItemData: [] };
    default:
      return state;
  }
};
