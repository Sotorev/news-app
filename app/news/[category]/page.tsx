import React from 'react'
import fetchNews from '../../../lib/fetchnews'
import NewsList from '../../NewsList'

type Props = {
	params: {category: string}
}

const NewsCategory = async ({ params: { category } }: Props) => {
	
	const news = await fetchNews(category)
	return (
		<div>
			<h1 className='headerTitle'>{category}</h1>
			<NewsList news={news} />
		</div>
	)
}

export default NewsCategory