import styles from 'styles/News.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import placeholder from '../public/steepens-logo-rectangle.png'
//import { createPlaceholder } from 'responsive-loader/lib/utils'

export default function News({ posts }) {
	return (
		<div id="aktuality" className="content container">
			<h1>News</h1>
			<div id="news-wrapper">
				{posts &&
					posts.map((post) => {
						return (
							<div key={post?.id} className="flex-row">
								<div className="flex-col">
									<div className="flex-row" style={{ width: 300 + 'px' }}>
										<Image
											src={post?.image[0].formats?.medium.url || placeholder}
											width={200}
											height={250}
											alt={post?.image[0].formats?.medium.name}
										/>
									</div>
								</div>
								<div className="flex-col">
									<span>{post?.createdAt}</span>
									<h2>{post?.title}</h2> <br />
									<p>{post?.description}</p> <br />
									<div>
										{() => {
											if (post.soldOut) {
												if ((post.soldOut = true)) return <span className="sold-out">Vyprodáno</span>
												else return <span className="available">Dostupné</span>
											}
										}}
									</div>{' '}
									<br />
									{post?.ticketsLink && (
										<Link href={post?.ticketsLink} target="_blank" rel="noreferrer noopener nofollow">
											<a>Vstupenky</a>
										</Link>
									)}
									<br />
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}
