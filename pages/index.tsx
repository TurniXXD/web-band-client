import React from 'react'
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
		<div className="page-wrapper">
			<ScrollUpBtn />
			<div className="content container">
				<Image src={hero} width="1000" height="500" alt="hero" />
			</div>
			<div id="clenove" className="content container flex-col flex-center">
				<div className="flex-row flex-center mb-8">
					<div className="flex-col">
						<h2 className="text-4xl">Naše banda</h2>
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
							<div className="person flex-col sm:ml-12 md:ml-24 sm:mt-12 md:mt-24">
								<Card>
									<div className="flex-row">
										<h2 className="text-3xl sm:text-4xl mb-2">{person.name}</h2>
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
			<div id="foto" className="content container">
				<div id="gallery-wraper">
					<div className="flex-col">
						{/* 							{photos &&
								photos.map((photo) => {
									return (
										<div key={photo.id} className="flex-row">
											<Image
												src={photo?.image[0].formats?.medium.url}
												width={250}
												height={140.63}
												alt={photo?.Simage[0].formats?.medium.name}
											/>
										</div>
									)
								})} */}
					</div>
				</div>
			</div>
			{/* <News posts={posts} /> */}
			<Footer />
		</div>
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
