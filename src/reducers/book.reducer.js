const initialState = {
  books: [],
  bookId: "",
  loading: false,
  deleting: false
};

export const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_BOOKS":
      return { ...state, books: [...state.books, ...payload], loading: false };
    case "ADD_BOOK":
      return { ...state, books: [...state.books, payload], loading: false };
    case "REMOVE_BOOK":
      return {
        ...state,
        books: [...state.books.filter(book => book.id !== payload)],
        deleting: false
      };
    case "LOAD_BOOK":
      return {
        ...state,
        bookId: payload,
        deleting: payload ? true : false,
        loading: !payload ? true : false
      };
    default:
      return state;
  }
};
