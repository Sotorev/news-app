import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
	category?: Category | string,
	keywords?: string,
	isDynamic?: boolean,
) => {
	//GraphQL query
	const query = gql`
  query MyQuery(
		$access_key: String!
		$categories: String!
		$keywords: String
		){
    myQuery(
      access_key: $access_key
      languages: "en"
      countries: "us"
			categories: $categories
      keywords: $keywords
    ) {
      data {
        url
        title
        source
        published_at
        language
        image
        description
        country
        category
        author
      }
      pagination {
        count
        limit
        offset
        total
      }
    }
  }
`;

	//Fetch function with Next.js 13 caching...
	const res = await fetch(
		'https://viersen.stepzen.net/api/honorary-clam/__graphql', {
		method: 'POST',
		cache: isDynamic ? 'no-cache' : 'default',
		next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
		},
		body: JSON.stringify({
			query,
			variables: {
				access_key: process.env.MEDIASTACK_API_KEY,
				categories: category,
				keywords: keywords,
			}
		})
	});
	//Sort function by images vs not images present
	const newResponse = await res.json();
	const news = sortNewsByImage(newResponse.data.myQuery);
	//return response
	return news;
}
//stepzen import curl http://api.mediastack.com/v1/news?access_key=ddf3e9fd6ad7741ed2821bd67c915714&countries=us&languages=en&sort=published_desc&limit=100&offset=0
//stepzen import curl http://api.mediastack.com/v1/news?access_key=d9dc794d5d3d4caa866f40b78cfff44e&countries=us&languages=en&sort=published_desc&limit=100&offset=0
export default fetchNews;