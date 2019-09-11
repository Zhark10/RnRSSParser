import { SAVE_SOURCE, DELETE_SOURCE, DELETE_ALL_SOURCES, REFRESH_ALL_SOURCES } from '../../store/actions';
import * as rssParser from 'react-native-rss-parser';
import { Dispatch } from 'redux';
import { makeActionCreator } from '../../utils/actionCreator';
import { Action } from '../../types/types';
import { showMessage } from '../../../utils/helpers';

const saveSourcesRequest = makeActionCreator(SAVE_SOURCE.REQUEST);
const saveSourcesSuccess = makeActionCreator(SAVE_SOURCE.SUCCESS, "payload");
const saveSourcesFailure = makeActionCreator(SAVE_SOURCE.FAILURE);

const deleteSourcesSuccess = makeActionCreator(DELETE_SOURCE.SUCCESS, "payload");

export function saveSource(rssUrl: string, cb?: Function) {
    return (dispatch: Dispatch<any>) => {
        dispatch(saveSourcesRequest());
        fetch(rssUrl)
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                dispatch(saveSourcesSuccess({ rss, rssUrl }));
                cb && cb();
            })
            .catch(() => {
                dispatch(saveSourcesFailure());
                showMessage("Некорректный адрес")
            });
        }
    }
    
export const deleteSource = (title: string) => (
    (dispatch: Dispatch<any>) => {
        dispatch(deleteSourcesSuccess(title));
        showMessage("Лента удалена")        
    }
)

export const deleteAllSources = (): Action<any> => ({
    type: DELETE_ALL_SOURCES,
    payload: []
})

export const refreshAllSources = (): Action<any> => ({ type: REFRESH_ALL_SOURCES })