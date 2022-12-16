import React from 'react'
import { categories } from '../constants';
import fetchNews from '../lib/fetchnews';
import NewsList from './NewsList';

const Homepage = async () => {

  //fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(','));  


  return (
    <div>
      <NewsList news={news}/>
    </div>
  )
}

export default Homepage