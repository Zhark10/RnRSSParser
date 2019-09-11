import { rssReducer } from '../modules/rss/reducer';
import { articlesReducer } from '../modules/articles/reducer';
import { combineReducers } from 'redux';
import { ISourcesState } from '../modules/rss/types';
import { IArticlesByUrlState } from '../modules/articles/types';

export interface Reducers {
    rssReducer: ISourcesState;
    articlesReducer: IArticlesByUrlState;
}

const rootReducer = combineReducers({
    rssReducer,
    articlesReducer
});

export default rootReducer;



