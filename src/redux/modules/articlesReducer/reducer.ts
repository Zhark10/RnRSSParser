import { Action } from '../../types/types';
import { SAVE_SOURCE, DELETE_SOURCE, REFRESH_SOURCE_ARTICLES } from '../../store/actions';
import { IArticlesByUrlState, IArticle, Articles } from './types';
import { RSSResponse } from '../rss/types';

const initialState: IArticlesByUrlState = {
    articles: {}
};

export function articlesReducer(state: IArticlesByUrlState = initialState, action: Action<any>) {
    const { type, payload } = action;
    switch (type) {
        case SAVE_SOURCE.REQUEST:
        case DELETE_SOURCE.REQUEST:
        case REFRESH_SOURCE_ARTICLES.REQUEST:
            return {
                ...state,
                isLoaded: false
            };

        case SAVE_SOURCE.SUCCESS: 
        case REFRESH_SOURCE_ARTICLES.SUCCESS: {
            const { rssUrl, rss } = payload;
            return {
                ...state,
                articles: addNewArticles(state.articles, rssUrl, rss)
            };
        }
        default:
            return state;
    }
}

const addNewArticles = (currentState: Articles, rssUrl: string, rss: RSSResponse) => {
    const newList: Articles = currentState;
    newList[rssUrl] = rss.items.map((article: IArticle) => ArticleCorrect(article));
    return newList;
}

const ArticleCorrect = (article: IArticle) => ({
    title: article.title ? article.title : "",
    link: article.link ? article.link : "",
    description: article.description ? article.description : "",
    author: article.author ? article.author : "",
    id: article.id ? article.id : "",
    published: article.published ? article.published : ""
});