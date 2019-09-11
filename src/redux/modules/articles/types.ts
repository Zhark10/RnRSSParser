export interface IArticle {
    title: string;
    link: string;
    description: string;
    author: string;
    id: any;
    published: string;
    [key: string]: any;
}

export interface Articles {
    [sourceUrl: string]: IArticle[];
}

export type IArticlesByUrlState = {
    articles: Articles;
}