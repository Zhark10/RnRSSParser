import { combineReducers } from "redux";
import { rssReducer, IRSSNewsState } from "./rss/reducer";

export interface Reducers {
    rss: IRSSNewsState;
}

export const rootReducer = () => combineReducers({
    rss: rssReducer
});