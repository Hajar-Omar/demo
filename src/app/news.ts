export interface IArticle {
    source: {
        id?: any;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content?: any;
}

export interface IArticleRes {
    status: string;
    totalResults: number;
    articles: IArticle[];
}
