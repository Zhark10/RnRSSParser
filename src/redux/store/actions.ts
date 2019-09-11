import { createRequestTypes } from "../utils/actionCreator";

export const SAVE_SOURCE = createRequestTypes("rss/SAVE_SOURCE");
export const REFRESH_SOURCE_ARTICLES = createRequestTypes("rss/REFRESH_SOURCE_ARTICLES");
export const DELETE_SOURCE = createRequestTypes("rss/DELETE_SOURCE");

export const DELETE_ALL_SOURCES = "DELETE_ALL_SOURCES";
export const SAVE_ID_BY_CURRENT_SOURCE = "SAVE_ID_BY_CURRENT_SOURCE";