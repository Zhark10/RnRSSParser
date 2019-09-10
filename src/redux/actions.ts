import { createRequestTypes } from '../utils/actionCreator';

export const SAVE_RSS_NEWS = createRequestTypes("rss/SAVE_RSS_NEWS");
export const DELETE_RSS_NEWS = createRequestTypes("rss/DELETE_RSS_NEWS");

export const LOAD_DEFAULT_RSS_IMAGE = "LOAD_DEFAULT_RSS_IMAGE";