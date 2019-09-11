import { REFRESH_SOURCE_ARTICLES } from '../../store/actions';
import * as rssParser from 'react-native-rss-parser';
import { Dispatch } from 'redux';
import { makeActionCreator } from '../../utils/actionCreator';

const refreshSourceArticlesRequest = makeActionCreator(REFRESH_SOURCE_ARTICLES.REQUEST);
const refreshSourceArticlesSuccess = makeActionCreator(REFRESH_SOURCE_ARTICLES.SUCCESS, "payload");

export function refreshSourceArticles(rssUrl: string, cb?: Function) {
    return (dispatch: Dispatch<any>) => {
        dispatch(refreshSourceArticlesRequest());
        try {
            fetch(rssUrl)
                .then((response) => response.text())
                .then((responseData) => rssParser.parse(responseData))
                .then((rss) => {
                    dispatch(refreshSourceArticlesSuccess({ rss, rssUrl }));
                    cb && cb();
                });
        } catch (e) {
            alert("Некорректный адрес");
        }
    }
}