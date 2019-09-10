import { SAVE_RSS_NEWS, DELETE_RSS_NEWS, LOAD_DEFAULT_RSS_IMAGE } from '../actions';
import { Action } from '../../types/action';

export interface RSSResponceItem {
    title: string;
    link: string;
    description: string;
    author: string;
    id: any;
    published: string;
}
export interface RSSResponse {
    id: string;
    title: string;
    imageUrl: string;
    link: string;
    description: string;
    items: RSSResponceItem[]
}
export interface IRSSNewsState {
    source: any[];
    isFetching: boolean;
}

const initialState: IRSSNewsState = {
    source: [],
    isFetching: false
};

export function rssReducer(state: IRSSNewsState = initialState, action: Action<any>) {
    const { type, payload } = action;
    switch (type) {
        case SAVE_RSS_NEWS.REQUEST:
            return {
                ...state,
                isFetching: false
            };

        case SAVE_RSS_NEWS.SUCCESS:
            const { rssUrl, rss } = payload;
            return {
                ...state,
                source: [...state.source, RSSCorrect(rssUrl, rss)],
                isFetching: true
            };
        case DELETE_RSS_NEWS.SUCCESS:
            return {
                ...state,
                source: state.source.filter((rss: RSSResponse) => rss.title !== payload),
                isFetching: true
            };
        case LOAD_DEFAULT_RSS_IMAGE:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state;
    }
}

const RSSCorrect = (rssUrl: string, rss: any) => {
    const RSSFormatted: RSSResponse = {
        title: "",
        imageUrl: null,
        link: "",
        description: "",
        items: [],
        id: rssUrl
    };

    if ("title" in rss) RSSFormatted.title = rss.title;
    if ("image" in rss) RSSFormatted.imageUrl = rss.image.url;
    if ("link" in rss) RSSFormatted.link = rss.link;
    if ("description" in rss) RSSFormatted.description = rss.description;
    if ("items" in rss) RSSFormatted.items = rss.items;

    return RSSFormatted;
}