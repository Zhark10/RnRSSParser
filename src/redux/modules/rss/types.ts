export interface RSSResponseItem {
    title: string;
    link: string;
    description: string;
    author: string;
    id: any;
    published: string;
}

export interface RSSResponse {
    id?: string;
    title?: string;
    imageUrl?: string;
    link?: string;
    description?: string;
    items?: RSSResponseItem[]
}

export interface ISourcesState {
    sources: any[];
    currentSourceId: string;
    isLoaded: boolean;
}