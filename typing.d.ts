
type Article = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
    name: string,

}



type Pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;

}

type NewsResponse = {
    pagination: null;
    data: Article[];
}

type Category =
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology";
