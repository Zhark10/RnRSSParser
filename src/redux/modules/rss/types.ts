import { IArticle } from "../articles/types";

export interface RSSResponse {
    id?: string;
    title?: string;
    imageUrl?: string;
    link?: string;
    description?: string;
    items?: IArticle[]
}

export interface ISourcesState {
    sources: RSSResponse[];
    isLoaded: boolean;
}