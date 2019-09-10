import { rssReducer, ISourcesState } from './modules/rss/reducer';
import { combineReducers } from 'redux';

export interface Reducers {
    rssReducer: ISourcesState;
}

const rootReducer = combineReducers({
    rssReducer
});

export default rootReducer;



