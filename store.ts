import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import { rootReducer } from "./redux/rootReducer";

export const configureStore = () => {
  const middleWares = [Thunk];

  const store = createStore(rootReducer, applyMiddleware(...middleWares));
  return store;
};