'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';

const Searchbox = () => {
	const [search, setSearch] = useState('');
	const router = useRouter();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!search) return;
		router.push(`/search?term=${search}`);
	}
	return (
		<form className="max-w-6xl mx-auto flex justify-between items-center"
			onSubmit={handleSearch}>
			<input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				type="text"
				placeholder="Search keywords..."
				className="w-full h-14 rounded-sm placeholder-gray-500
			bg-transparent dark:text-orange-400 flex-1 outline-none"/>
			<button type="submit"
				disabled={!search}
				className="text-orange-400 disabled:text-gray-400">
				Search
			</button>
		</form>
	)
}

export default Searchbox