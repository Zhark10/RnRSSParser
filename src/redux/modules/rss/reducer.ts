import { Action } from '../../types/types';
import { SAVE_SOURCE, DELETE_SOURCE, DELETE_ALL_SOURCES, SAVE_ID_BY_CURRENT_SOURCE, REFRESH_SOURCE_ARTICLES } from '../../store/actions';
import { RSSResponse, ISourcesState } from './types';

const initialState: ISourcesState = {
    sources: [],
    currentSourceId: null,
    isLoaded: false
};

export function rssReducer(state: ISourcesState = initialState, action: Action<any>) {
    const { type, payload } = action;
    switch (type) {
        case SAVE_SOURCE.REQUEST:
        case DELETE_SOURCE.REQUEST:
            return {
                ...state,
                isLoaded: false
            };

        case SAVE_SOURCE.SUCCESS:{
            const { rssUrl, rss } = payload;
            return {
                ...state,
                sources: [RSSCorrect(rssUrl, rss), ...state.sources],
                isLoaded: true
            };
        }
        case DELETE_SOURCE.SUCCESS:
            return {
                ...state,
                sources: state.sources.filter((rss: RSSResponse) => rss.title !== payload),
                isLoaded: true
            };
        case DELETE_ALL_SOURCES:
            return {
                ...state,
                sources: [],
                isLoaded: true
            }
        case SAVE_ID_BY_CURRENT_SOURCE:
            return {
                ...state,
                currentSourceId: payload,
                isLoaded: true
            }
        default:
            return state;
    }
}

const RSSCorrect = (rssUrl: string, rss: any) => ({
    title: rss.title ? rss.title : "",
    imageUrl: rss.image ? rss.image.url : null,
    link: rss.link ? rss.link : "",
    description: rss.description ? rss.description : "",
    items: rss.items ? rss.items : [],
    id: rssUrl
});