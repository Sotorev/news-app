import React from 'react'
import fetchnews from '../../lib/fetchnews'
import NewsList from '../NewsList'
import {categories} from '../../constants'
type Props = {
	searchParams?: {term: string}
}
const SearchPage = async ({ searchParams }: Props) => {
	const news: NewsResponse = await fetchnews(categories.join(','), searchParams?.term, true)
	return (
		<div>
			<h1 className='headerTitle'>Search results for {searchParams?.term}</h1>
			<NewsList news={news} />
		</div>
	)
}

export default SearchPage