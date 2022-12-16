import React from 'react'
import Article from './Article'
import {categories} from '../constants'

type Props = {
	news: NewsResponse
}

const NewsList = ({news}: Props) => {
	return (
		<main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10
		gap-10'>
			{news.data.map((article: Article) => (
				<Article article={article} key={article.title} />
			))}
		</main>
	)
}

export default NewsList

export async function generateStaticParams() {
	return categories.map((category: string) => ({ category: category  }))
}