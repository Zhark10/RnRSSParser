import { rssReducer } from '../modules/rss/reducer';
import { combineReducers } from 'redux';
import { ISourcesState } from '../modules/rss/types';

export interface Reducers {
    rssReducer: ISourcesState;
}

const rootReducer = combineReducers({
    rssReducer
});

export default rootReducer;



