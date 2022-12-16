type Category = 
	| "business"
	| "entertainment"
	| "health"
	| "science"
	| "sports"
	| "technology"
	| "general"
type Pagination = {
	count: number;
	limit: number;
	offset: number;
	total: number;
}
type NewsResponse = {
	pagination: Pagination;
	data: Article[];
}
type Article = {
	author: string | null;
	category: string;
	country: string;
	description: string;
	image: string | null;
	language: string;
	published_at: DateTime;
	source: string;
	title: string;
	url: string;
}