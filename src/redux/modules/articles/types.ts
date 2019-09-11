export interface IArticle {
    title: string;
    link: string;
    description: string;
    author: string;
    id: any;
    published: string;
    image: string;
}

export interface Articles {
    [sourceUrl: string]: IArticle[];
}

export type IArticlesByUrlState = {
    articles: Articles;
}