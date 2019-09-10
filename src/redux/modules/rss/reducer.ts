import { Action } from '../../../types/action';
import { SAVE_SOURCE, DELETE_SOURCE, DELETE_ALL_SOURCES } from '../../store/actions';
import { RSSResponse, ISourcesState } from './types';

const initialState: ISourcesState = {
    sources: [],
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

        case SAVE_SOURCE.SUCCESS:
            const { rssUrl, rss } = payload;
            return {
                ...state,
                sources: [...state.sources, RSSCorrect(rssUrl, rss)],
                isLoaded: true
            };
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