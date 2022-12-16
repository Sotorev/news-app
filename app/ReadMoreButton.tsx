'use client';

import React from 'react'
import { useRouter } from 'next/navigation';

type Props = {
	article: Article;
}

const ReadMoreButton = ({ article }: Props) => {
	const router = useRouter();
	const handleClick = () => {
		const queryString = Object.entries(article).map(([key, value]) => {
			return `${key}=${value}`
		}).join('&');
		const url = `/article?${queryString}`;
		router.push(url);

	}
	return (
		<button
			className='bg-orange-400 h-10 rounded-b-lg dark:text-gray-900'
			onClick={handleClick}>
			Read more
		</button>
	)
}

export default ReadMoreButton