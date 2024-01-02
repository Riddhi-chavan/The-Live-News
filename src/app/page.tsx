import React from 'react';
import fetchNews from '../../lib/fetchNews';
import NewsList from '../app/component/NewsList';
import { categories } from '../../constant';

async function Page() {
  // Pass an array of all categories to fetch all news
  const news: NewsResponse = await fetchNews(categories);

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Page;
