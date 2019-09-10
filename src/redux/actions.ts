import { createRequestTypes } from "./utils/actionCreator";

export const SAVE_SOURCE = createRequestTypes("rss/SAVE_SOURCE");
export const DELETE_SOURCE = createRequestTypes("rss/DELETE_SOURCE");

export const DELETE_ALL_SOURCES = "DELETE_ALL_SOURCES";
export const REFRESH_ALL_SOURCES = "REFRESH_ALL_SOURCES";