const initialState = {
  items: [],
  itemId: "",
  loading: false
};

export const itemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_ITEMS":
      return { ...state, items: [...state.items, ...payload], loading: false };
    case "ADD_ITEM":
      return { ...state, items: [...state.items, payload], loading: false };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: [...state.items.filter(item => item.id !== payload)],
        loading: false
      };
    case "LOAD_ITEM":
      return { ...state, loading: true };
    default:
      return state;
  }
};
