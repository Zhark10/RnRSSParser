import { makeActionCreator } from "../../utils/actionCreator";
import { SAVE_RSS_NEWS } from "../actions";
import * as rssParser from "react-native-rss-parser";
import { Dispatch } from "redux";

const saveRSSNewsRequest = makeActionCreator(SAVE_RSS_NEWS.REQUEST);
const saveRSSNewsSuccess = makeActionCreator(SAVE_RSS_NEWS.SUCCESS, "payload");
const saveRSSNewsFailure = makeActionCreator(SAVE_RSS_NEWS.FAILURE);

export function saveSource(rssUrl: string) {
    return (dispatch: Dispatch<any>) => {
        try {
            dispatch(saveRSSNewsRequest());
            fetch(rssUrl)
                .then((response) => response.text())
                .then((responseData) => rssParser.parse(responseData))
                .then((rss) => {
                    dispatch(saveRSSNewsSuccess(rss));
                });
        } catch (e) {
            dispatch(saveRSSNewsFailure());
            alert("Некорректный адрес");
        }
    }
}