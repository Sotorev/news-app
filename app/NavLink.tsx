import Link from 'next/link'
import { ScriptProps } from 'next/script'
import React from 'react'
type Props = {
	isActive: boolean;
	category: string;
}
const NavLink = ({ category, isActive }: Props) => {
	return (
		<Link href={`/news/${category}`}
			className={`navLink ${isActive &&
				"underline decoration-orange-400 underline-offset-4 font-bold text-lg"}
				`}>
			{category}
		</Link>
	)
}

export default NavLink