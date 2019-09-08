import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/rootReducer";
import thunk from "redux-thunk";
import promise from "redux-promise";
import { createLogger } from "redux-logger";

export const configureStore = (initialState: any = undefined) => {
  const logger = createLogger();
  const middleWares = compose(applyMiddleware(thunk, promise, logger))

  const store = createStore(rootReducer, initialState, middleWares);
  return store;
};