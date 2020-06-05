import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

// log middleware
const loggerMiddleware = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error
});

// thunk middleware
let middlewares = [thunkMiddleware];
// log for development only
if (process.env.NODE_ENV !== "production") {
  middlewares = [...middlewares, loggerMiddleware];
}

// redux dev tool middleware
const reduxMiddleware =
  process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;

// configure store
export const configureStore = preloadedState => {
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, reduxMiddleware];
  const composedEnhancers = compose(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  return store;
};
