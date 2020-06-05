import { combineReducers } from "redux";
import { bookReducer } from "./book.reducer";

const appReducer = combineReducers({
  books: bookReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
