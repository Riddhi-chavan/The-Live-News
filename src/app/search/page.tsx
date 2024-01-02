import React from 'react';
import fetchNews from '../../../lib/fetchNews';
import NewsList from '../component/NewsList';


type Props = {
  searchParams?: { term: string };
};

async function SearchPage({ searchParams }: Props) {
  // Check if there is a search term
  const term = searchParams?.term;

  // Fetch news based on the search term
  const news: NewsResponse = await fetchNews("general", term, true);

  return (
    <div>
      <h1 className='headerTitle'>Search Results for: {term}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
