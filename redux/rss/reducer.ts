import { SAVE_RSS_NEWS } from "../actions";
import { Action } from "../../types/action";

export interface IRSSNewsState {
    source: any;
    isFetching: boolean;
}

const initialState: IRSSNewsState = {
    source: null,
    isFetching: false
};

export function rssReducer(state = initialState, action: Action<any>) {
    const { type, payload } = action;
    switch (type) {
        case SAVE_RSS_NEWS.REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case SAVE_RSS_NEWS.FAILURE:
            return {
                ...state,
                isFetching: false
            };
        case SAVE_RSS_NEWS.SUCCESS:
            return {
                ...state,
                source: payload,
                isFetching: false
            };
    }
}