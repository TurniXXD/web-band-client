import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import ScrollUpBtn from '@components/ScrollUpBtn'
import Navigation from '@components/Navigation'
import Music from '@components/Music'
import Card from '@components/Card'
import { people } from '../data/people'
import { iPeople, iFavoriteMusic } from '../graphql/models/model'
import News from '@components/News'
import Footer from '@components/Footer'
import { fetchAPI } from 'lib/api'
import Image from 'next/image'
import placeholder from 'public/steepens-logo-rectangle.png'
import hero from 'public/steepens-logo-white.svg'

import styles from 'styles/Home.module.css'

export default function Home(/* { global, songs, people, photos, posts } */) {
	return (
	<>
		<NextSeo
			title=/* {global?.metaTitle} */"Steepens"
			description={/* global?.metaDescription */"Česká hard rocková kapela z Frýdku-Místku"}
			canonical={/* global?.url */"https://steepensband.eu/"}
			openGraph={{
				url: `${/* global?.url */""}https://steepensband.eu/`,
				title: `${/* global?.metaTitle */""}Steepens`,
				description: `${/* global?.metaDescription */""}Česká hard rocková kapela z Frýdku-Místku`,
				// images: [
				// 	{
				// 		url: `${global?.shareImage[0]?.formats?.large.url}`,
				// 		width: `${global?.shareImage[0]?.formats?.large.width}`,
				// 		height: `${global?.shareImage[0]?.formats?.large.height}`,
				// 		alt: `${global?.shareImage[0]?.formats?.large.name}`,
				// 	},
				// 	{
				// 		url: `${global?.shareImage[0]?.formats?.medium.url}`,
				// 		width: `${global?.shareImage[0]?.formats?.medium.width}`,
				// 		height: `${global?.shareImage[0]?.formats?.medium.height}`,
				// 		alt: `${global?.shareImage[0]?.formats?.medium.name}`,
				// 	},
				// 	{
				// 		url: `${global?.shareImage[0]?.formats?.small.url}`,
				// 		width: `${global?.shareImage[0]?.formats?.small.width}`,
				// 		height: `${global?.shareImage[0]?.formats?.small.height}`,
				// 		alt: `${global?.shareImage[0]?.formats?.small.name}`,
				// 	},
					images: [
						{
							url: '/public/images/steepens-logo-rectangle.png',
							width: 1000,
							height: 1000,
							alt: 'Steepens',
						},
						{
							url: '/public/images/steepens-logo-rectangle.png',
							width: 750,
							height: 750,
							alt: 'Steepens',
						},
						{
							url: '/public/images/steepens-logo-rectangle.png',
							width: 500,
							height: 500,
							alt: 'Steepens',
						}
				],
				site_name: /* `${global?.siteName}` */"Steepens",
			}}
		/>
		<Head>
			<link rel="shortcut icon" href=/* {global?.favicon[0]?.url} */"/static/favicon.ico" />
			<meta name="theme-color" content={/* global?.primaryColor */"#B70101"} />
			<meta name="author" content="https://github.com/TurniXXD" />
		</Head>
		<ScrollUpBtn />
		<div className="page-wrapper">
			<div className="container flex-center py-20">
				<Image src={hero} width="1000" height="500" alt="hero" />
			</div>
			<div id="clenove" className="container flex-col flex-center">
				<div className="flex-row flex-center">
					<div className="flex-col">
						<h2 className="text-5xl sm:text-6xl">Kapela</h2>
					</div>
				</div>
				<div className="flex-row flex-wrap flex-center">
					{/* 						<Image
							src={people?.image[0].formats?.small.url || placeholder}
							alt={people?.image[0].formats?.small.name}
							className="rounded-img"
							width="200"
							height="200"
						/> */}
					{people.map((person: iPeople) => {
						return (
							<div className="person flex-col sm:ml-12 md:ml-24 sm:mt-12 md:mt-20">
								<Card>
									<div className="flex-row flex-center">
										<h2 className="text-xl-1-5 sm:text-4xl mb-2">{person.name}</h2>
									</div>
									<div className="flex-row flex-center">
										<span className="text-lg mb-4">{person.position}</span>
									</div>
									<div className="flex-row">
										<span className="text-lg mb-2">Oblíbená hudba:</span>
									</div>
									<div className="flex-row">
										<div className="flex-col">
											{person.favoriteMusic.map((music: iFavoriteMusic) => {
												return (
													<div className="flex-row">
														<div className="flex-col">
															<span>{music.band}</span>
														</div>
													</div>
												)
											})}
										</div>
									</div>
								</Card>
							</div>
						)
					})}
				</div>
			</div>
			{/* <News posts={posts} /> */}
			<div className="container mt-32">
				<div className="flex-row flex-center mb-20">
					<div className="flex-col">
						<h2 className="text-5xl sm:text-6xl">Galerie</h2>
					</div>
				</div>
				<div className="gallery-cards-wrapper flex flex-wrap flex-center xl:space-x-28">
					<div className="flex-col flex-center w-full xl:w-3/12">
						<Card>
							<iframe
								className="max-h-full w-60 sm:w-96"
								width="400"
								height="200"
								src="https://www.youtube.com/embed/42YcLh_Io5A"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</Card>
					</div>
					<div className="flex-col flex-center w-full mt-12 xl:w-3/12 xl:mt-0">
						<Card>
							<iframe
								className="max-h-full w-60 sm:w-96"
								width="400"
								height="200"
								src="https://www.youtube.com/embed/42YcLh_Io5A"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</Card>
					</div>
					<div className="flex-col flex-center w-3/12 ytb-last">
						<Card>
							<iframe
								className="max-h-full w-60 sm:w-96"
								width="400"
								height="200"
								src="https://www.youtube.com/embed/42YcLh_Io5A"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</Card>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	</>
	)
}

// export async function getStaticProps() {
//   try {
//     const [global, songs, people, photos, posts] = await Promise.all([
//       fetchAPI('global'),
//       fetchAPI('songs'),
//       fetchAPI('people'),
//       fetchAPI('photos'),
//       fetchAPI('posts')
//     ])

//     console.log(`${global}\n${songs}\n${people}\n${photos}\n${posts}`)

//     return {
//       props: { global, songs, people, photos, posts },
//       // ability to add dynamic pieces by revalidating the code and not having to rebuild each time
//       revalidate: 1,
//     };
//   } catch (error) {
//     console.log(error)

//     return {
//       props: null
//     }
//   }
// }
