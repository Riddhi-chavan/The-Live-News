import fetchNews from "../../../../lib/fetchNews";
import NewsList from "../../component/NewsList";
import { categories }  from "../../../../constant";

type Props = {
    params: { category: Category };
};

async function NewsCategory({ params: { category } }: Props) {

    console.log("categoreis " , category)

    const news: NewsResponse = await fetchNews(category);

    return (
        <div>
            <h1 className="headerTitle">{category}</h1>
            <NewsList news={news} />
        </div>
    )
}

export default NewsCategory;


export async function generateStaticParams() {
    return categories.map((category) => ({
        category: category,
    }));
}