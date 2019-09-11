import { REFRESH_SOURCE_ARTICLES, SORT_ARTICLES_BY_DATE } from '../../store/actions';
import * as rssParser from 'react-native-rss-parser';
import { Dispatch } from 'redux';
import { makeActionCreator } from '../../utils/actionCreator';
import { Action } from '../../types/types';
import { showMessage } from '../../../utils/helpers';

const refreshSourceArticlesRequest = makeActionCreator(REFRESH_SOURCE_ARTICLES.REQUEST);
const refreshSourceArticlesSuccess = makeActionCreator(REFRESH_SOURCE_ARTICLES.SUCCESS, "payload");

export function refreshSourceArticles(rssUrl: string, cb?: Function) {
    return (dispatch: Dispatch<any>) => {
        dispatch(refreshSourceArticlesRequest());
        fetch(rssUrl)
        .then((response) => response.text())
        .then((responseData) => rssParser.parse(responseData))
        .then((rss) => {
            dispatch(refreshSourceArticlesSuccess({ rss, rssUrl }));
            cb && cb();
        })
        .catch(() => {
            showMessage("Упс, что-то пошло не так")
        });
    }
}

export const sortArticlesByDate = (id: string): Action<any> => ({ 
    type: SORT_ARTICLES_BY_DATE,
    payload: id
 })