export default function SortByImage(news : NewsResponse){
    

    const newsWithImg = news.data.filter((item) => item.image !== null);
    const newWithoutImg  =  news.data.filter((item) => item.image  === null);

    const sortNewsResponse = {
        pagination  : news.pagination,
        data : [...newsWithImg , ...newWithoutImg ],

        }

        return sortNewsResponse;
}



