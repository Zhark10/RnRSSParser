import { SAVE_RSS_NEWS } from "../actions";
import { Action } from "../../types/action";

export interface IRSSNewsState {
    source: string[];
}

const initialState: IRSSNewsState = {
    source: [],
};

export function rssReducer(state: IRSSNewsState = initialState, action: Action<any>) {
    const { type, payload } = action;
    switch (type) {
        case SAVE_RSS_NEWS.REQUEST:
            return {
                ...state,
            };
        case SAVE_RSS_NEWS.FAILURE:
            return {
                ...state,
            };
        case SAVE_RSS_NEWS.SUCCESS:
            return {
                source: [...state.source, payload],
            };
    }
}