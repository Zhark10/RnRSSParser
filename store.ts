import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./redux/rootReducer";
import { createLogger } from "redux-logger";
import reduxThunk  from "redux-thunk";
import promise from "redux-promise";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [
    "rssReducer",
  ],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger();
const middleWares = compose(applyMiddleware(reduxThunk, promise, logger))

const store = createStore(
  persistedReducer,
  middleWares,
);

let persistor = persistStore(store);

export { store, persistor };