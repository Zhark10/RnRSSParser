import { rssReducer, IRSSNewsState } from "./rss/reducer";
import { Action } from "../types/action";

export interface Reducers {
    rss: IRSSNewsState;
}

const rootReducer = (state: any = {}, action: Action<any>) => ({
    rss: rssReducer(state.source, action)
});

export default rootReducer;