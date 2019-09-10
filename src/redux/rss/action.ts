import { SAVE_RSS_NEWS, DELETE_RSS_NEWS, LOAD_DEFAULT_RSS_IMAGE } from '../actions';
import * as rssParser from 'react-native-rss-parser';
import { Dispatch } from 'redux';
import { makeActionCreator } from '../../utils/actionCreator';

const saveRSSNewsRequest = makeActionCreator(SAVE_RSS_NEWS.REQUEST);
const saveRSSNewsFailure = makeActionCreator(SAVE_RSS_NEWS.FAILURE);
const saveRSSNewsSuccess = makeActionCreator(SAVE_RSS_NEWS.SUCCESS, "payload");

const deleteRSSNewsSuccess = makeActionCreator(DELETE_RSS_NEWS.SUCCESS, "payload");

export function saveSource(rssUrl: string) {
    return (dispatch: Dispatch<any>) => {
        dispatch(saveRSSNewsRequest());
        try {
            fetch(rssUrl)
                .then((response) => response.text())
                .then((responseData) => rssParser.parse(responseData))
                .then((rss) => {
                    dispatch(saveRSSNewsSuccess({rss, rssUrl}));
                });
        } catch (e) {
            alert("Некорректный адрес");
        }
    }
}

export function deleteSource(title: string) {
    return (dispatch: Dispatch<any>) => {
        dispatch(deleteRSSNewsSuccess(title));
    }
}

export const loadDefaultRSSImage = (imageUrl: string): { type: string, payload: string } => ({
    type: LOAD_DEFAULT_RSS_IMAGE,
    payload: imageUrl
})