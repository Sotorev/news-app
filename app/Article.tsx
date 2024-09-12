import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

interface Article {
	title: string
	description: string
	image: string
	source: string
	published_at: string
	url: string
}

interface ArticleProps {
	article: Article
}

export default function Article({ article }: ArticleProps) {
	return (
		<Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
			<CardHeader className="p-0">
				{article.image &&
					<img
						src={article.image}
						alt={article.title}
						className='h-56 w-full object-cover rounded-t-lg shadow-md' />}
			</CardHeader>
			<CardContent className="p-4">
				<h2 className="text-2xl font-bold mb-2 line-clamp-2">{article.title}</h2>
				<p className="text-sm text-muted-foreground line-clamp-3 mb-4">{article.description}</p>
				<div className="flex items-center justify-between text-xs text-muted-foreground">
					<Badge variant="secondary">{article.source}</Badge>
					<div className="flex items-center">
						<Clock className="w-4 h-4 mr-1" />
						<time dateTime={article.published_at}>
							{new Date(article.published_at).toLocaleDateString()}
						</time>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button asChild className="w-full">
					<a href={article.url} target="_blank" rel="noopener noreferrer">
						Read More
					</a>
				</Button>
			</CardFooter>
		</Card>
	)
}