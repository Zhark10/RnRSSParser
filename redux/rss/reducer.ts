import { SAVE_RSS_NEWS } from "../actions";
import { Action } from "../../types/action";

interface RSSResponse {
    title: string;
    imageUrl: string;
    author: string;
    description: string;
}
export interface IRSSNewsState {
    source: any[];
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
                source: [...state.source, RSSCorrect(payload)],
            };
        default:
            return state;
    }
}

const RSSCorrect = (payload: any) => {
    const RSSFormatted: RSSResponse = {
            title: "",
            imageUrl: "",
            author: "",
            description: ""
    };

    if ("title" in payload) RSSFormatted.author = payload.title;
    if ("image" in payload) RSSFormatted.author = payload.image.url;
    if ("author" in payload) RSSFormatted.author = payload.author;
    if ("description" in payload) RSSFormatted.author = payload.description;

    return RSSFormatted;
}