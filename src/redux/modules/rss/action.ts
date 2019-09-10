import {  SAVE_SOURCE, DELETE_SOURCE, DELETE_ALL_SOURCES } from '../../store/actions';
import * as rssParser from 'react-native-rss-parser';
import { Dispatch } from 'redux';
import { makeActionCreator } from '../../utils/actionCreator';

const saveSourcesRequest = makeActionCreator(SAVE_SOURCE.REQUEST);
const saveSourcesSuccess = makeActionCreator(SAVE_SOURCE.SUCCESS, "payload");

const deleteSourcesSuccess = makeActionCreator(DELETE_SOURCE.SUCCESS, "payload");

export function saveSource(rssUrl: string, cb?: Function) {
    return (dispatch: Dispatch<any>) => {
        dispatch(saveSourcesRequest());
        try {
            fetch(rssUrl)
                .then((response) => response.text())
                .then((responseData) => rssParser.parse(responseData))
                .then((rss) => {
                    dispatch(saveSourcesSuccess({rss, rssUrl}));
                    cb && cb();
                });
        } catch (e) {
            alert("Некорректный адрес");
        }
    }
}

export function deleteSource(title: string) {
    return (dispatch: Dispatch<any>) => {
        dispatch(deleteSourcesSuccess(title));
    }
}

export const deleteAllSources = (): { type: string, payload: any[] } => ({
    type: DELETE_ALL_SOURCES,
    payload: []
})