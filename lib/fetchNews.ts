


const fetchNews = async (category: Category | Category[], searchTerm?: string, isSearch?: boolean) => {
  const apiKey = process.env.MEDIASTACK_API_KEY;
  let apiUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}&categories=${category}`;

  // If it's a search, add the search term to the API request
  if (isSearch && searchTerm) {
    apiUrl += `&keywords=${searchTerm}`;
  }

  // Add a cache-busting timestamp to the URL
  apiUrl += `&_=${new Date().getTime()}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const news = await response.json();
    // console.log("news", news);

    return news;
  } catch (error) {
    console.error('Error fetching news:', error);
    // Handle error appropriately
  }
};

export default fetchNews;
