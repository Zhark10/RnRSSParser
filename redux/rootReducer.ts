import { rssReducer, IRSSNewsState } from "./rss/reducer";
import { combineReducers } from "redux";

export interface Reducers {
    rssReducer: IRSSNewsState;
}

const rootReducer = combineReducers({
    rssReducer
});

export default rootReducer



