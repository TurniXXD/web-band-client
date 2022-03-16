import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import ScrollUpBtn from '@components/ScrollUpBtn'
import Navigation from '@components/Navigation'
import Music from '@components/Music'
import Card from '@components/Card'
import LightboxGallery from '@components/LightboxGallery'
import { people } from '../data/people'
import { iPeople, iFavoriteMusic } from '../graphql/models/model'
import { gallery } from '../data/gallery'
import News from '@components/News'
import Footer from '@components/Footer'
import { fetchAPI } from 'lib/api'
import Image from 'next/image'

import placeholder from 'public/steepens-logo-rectangle.png'
import hero from 'public/steepens-logo-white.svg'
import foceni1 from 'public/foceni/1.png'
import foceni2 from 'public/foceni/2.png'
import foceni3 from 'public/foceni/3.png'
import foceni4 from 'public/foceni/4.png'
import foceni5 from 'public/foceni/5.png'
import foceni6 from 'public/foceni/6.png'
import foceni7 from 'public/foceni/7.png'
import foceni8 from 'public/foceni/8.png'
import debutPoster from 'public/aktuality/debut-poster.png'
import rockhill from 'public/aktuality/rockhill.png'
import zostra from 'public/aktuality/zostra.png'
import positive from 'public/aktuality/positive.png'
import izzy from 'public/kapela/izzy.png'
import kuba from 'public/kapela/kuba.png'
import martin from 'public/kapela/martin.png'
import peta from 'public/kapela/peta.png'
import barca from 'public/kapela/barca.png'

import styles from 'styles/Home.module.css'

export default function Home(/* { global, songs, people, photos, posts } */) {
	return (
		<>
			<NextSeo
				title=/* {global?.metaTitle} */"Steepens"
				description={/* global?.metaDescription */"Jsme Hard & Heavy kapela Steepens z Frýdku-Místku, a přinášíme vám vlastní tvorbu tvrdého i lehčího stylu."}
				canonical={/* global?.url */"https://steepensband.eu/"}
				openGraph={{
					url: `${/* global?.url */""}https://steepensband.eu/`,
					title: `${/* global?.metaTitle */""}Steepens`,
					description: `${/* global?.metaDescription */""}Jsme Hard & Heavy kapela Steepens z Frýdku-Místku, a přinášíme vám vlastní tvorbu tvrdého i lehčího stylu.`,
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
					<Image src={hero} width="1000" height="750" alt="hero" />
				</div>
				<div id="aktuality" className="container mt-4 sm:mt-32">
					<div className="flex-row flex-center mb-4 sm:mb-20">
						<div className="flex-col">
							<h2 className="text-5xl sm:text-6xl">Aktuality</h2>
						</div>
					</div>
					<div className="cards-wrapper flex flex-wrap flex-center xl:space-x-28">
						<div className="flex-col flex-center w-full">
							<Card>
								<div className="flex-row aktuality-image-mobile">
									<div>
										<Image src={debutPoster} width="707" height="1000" alt="hero" />
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col aktuality-image">
										<div>
											<Image src={debutPoster} width="707" height="1000" alt="hero" />
										</div>
									</div>
									<div className="flex-col py-8 px-5 sm:p-12">
										<div className="flex-row-reverse aktuality-partners-images">
											<div className="flex-col flex-center ml-8">
												<Link href="https://www.facebook.com/kapelazostra/">
													<a target="_blank" rel="noreferrer noopener">
														<Image src={zostra} width="60" height="60" alt="hero" />
													</a>
												</Link>
											</div>
											<div className="flex-col flex-center ml-8">
												<Link href="https://www.facebook.com/kapelapositive">
													<a target="_blank" rel="noreferrer noopener">
														<Image src={positive} width="60" height="60" alt="hero" />
													</a>
												</Link>
											</div>
											<div className="flex-col flex-center">
												<Link href="https://www.facebook.com/rockhillmusicclub/">
													<a target="_blank" rel="noreferrer noopener">
														<Image src={rockhill} width="75" height="75" alt="hero" />
													</a>
												</Link>
											</div>
											<div className="flex grow items-center">
												<h2 className="text-xl-1-5 sm:text-6xl mb-2">Debut</h2>
											</div>
										</div>
										<div className="flex-row">
											<div className="flex-col">
												<span className="text-base sm:text-xl">7.5.2022 - OSTRAVA</span>
											</div>
										</div>
										<div className="aktuality-p flex-row mt-6">
											<p>
												Po dlouhé době zkoušení a překážkách v tvorbě nás čeká první představení naší hard & heavy tvorby v klubu Rock Hill v Ostravě. Společně s námi zahraje zkušená Punk'n'Rollová kapela Positive, se kterými zahraje, místním i přespolním dosti známá formace, Zostra.
											</p>
										</div>
										<div className="flex-row mt-4">
											<div className="flex-col">
												<span className="text-lg">Vstupné: 150Kč</span>
											</div>
										</div>
										<div className="flex-row mt-10">
											<div className="flex-col">
												<span className="text-base sm:text-lg">Více informací {' '}
													<Link href="https://www.facebook.com/events/1284569618704405?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D">
														<a target="_blank" rel="noreferrer noopener">
															<span className="underline">zde</span>
														</a>
													</Link>
												</span>
											</div>
										</div>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
				<div id="tvorba" className="container mt-20 sm:mt-32">
					<div className="flex-row flex-center mb-20">
						<div className="flex-col">
							<h2 className="text-5xl sm:text-6xl">Tvorba</h2>
						</div>
					</div>
					<div className="cards-wrapper flex flex-wrap flex-center xl:space-x-28">
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
				<div id="kapela" className="container flex-col flex-center mt-4 sm:mt-32">
					<div className="flex-row flex-center mb-4 sm:mb-20">
						<div className="flex-col">
							<h2 className="text-5xl sm:text-6xl">Kapela</h2>
						</div>
					</div>
					<div className="flex-row flex-wrap flex-center gap-16 sm:gap-24">
						{/* 						<Image
							src={people?.image[0].formats?.small.url || placeholder}
							alt={people?.image[0].formats?.small.name}
							className="rounded-img"
							width="200"
							height="200"
						/> */}
						{people.map((person: iPeople, i: number) => {
							//sm:ml-12 md:ml-24 sm:mt-12 md:mt-20
							return (
								<div className="person flex-col">
									<Card>
										<div className="flex-row flex-center">
											{i == 0 && <Image src={barca} width="400" height="266" alt="hero" />}
											{i == 1 && <Image src={martin} width="400" height="266" alt="hero" />}
											{i == 2 && <Image src={kuba} width="400" height="266" alt="hero" />}
											{i == 3 && <Image src={peta} width="400" height="266" alt="hero" />}
											{i == 4 && <Image src={izzy} width="400" height="266" alt="hero" />}
										</div>
										<div className="flex-row flex-center mx-8 mt-8">
											<h2 className="text-xl-1-5 sm:text-4xl mb-2">{person.name}</h2>
										</div>
										<div className="flex-row flex-center mx-8">
											<span className="text-lg mb-4">{person.position}</span>
										</div>
										<div className="flex-row mx-8 sm:mx-16">
											<span className="text-lg mb-2">Oblíbená hudba:</span>
										</div>
										<div className="flex-row mx-8 sm:mx-16 mb-8">
											<div className="flex-col">
												{person.favoriteMusic.map((music: iFavoriteMusic) => {
													return (
														<div className="flex-row">
															<div className="flex-col">
																<span className="person-favorite-music">{music.band}</span>
																<span className="person-favorite-music-mobile">- {music.band}</span>
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
				<div id="galerie" className="container mt-20 sm:mt-32">
					<div className="flex-row flex-center mb-4 sm:mb-20">
						<div className="flex-col">
							<h2 className="text-5xl sm:text-6xl">Galerie</h2>
						</div>
					</div>
					<div className="cards-wrapper flex flex-wrap flex-center xl:gap-y-16">
						{gallery.map((item: any) => {
							return (
								<div className="flex-col flex-center w-full sm:w-6/12 mt-12 xl:w-3/12 xl:mt-0">
									<Card>
										<div className=" w-60 sm:w-60 h-full">
											{item.image == 1 && (
												<LightboxGallery i={0}><Image src={foceni1} width="300" height="200" alt="hero" /></LightboxGallery>
											)}
											{item.image == 2 && (
												<LightboxGallery i={1}><Image src={foceni2} width="300" height="200" alt="hero" /></LightboxGallery>
											)}
											{item.image == 3 && (
												<LightboxGallery i={2}><Image src={foceni3} width="300" height="200" alt="hero" /></LightboxGallery>
											)}
											{item.image == 4 && (
												<LightboxGallery i={3}><Image src={foceni4} width="300" height="200" alt="hero" /></LightboxGallery>
											)}
											{item.image == 5 && (
												<LightboxGallery i={4}><Image src={foceni5} width="300" height="200" alt="hero" /></LightboxGallery>
											)}
											{item.image == 6 && (
												<LightboxGallery i={5}><Image src={foceni6} width="300" height="200" alt="hero" /></LightboxGallery>
											)}
											{item.image == 7 && (
												<LightboxGallery i={6}><Image src={foceni7} width="300" height="200" alt="hero" /></LightboxGallery>
											)}
											{item.image == 8 && (
												<LightboxGallery i={7}><Image src={foceni8} width="300" height="200" alt="hero" /></LightboxGallery>
											)}
										</div>
									</Card>
								</div>
							)
						})
						}
						{/* <div className="flex-col flex-center w-full mt-12 xl:w-3/12 xl:mt-0">
							<Card>
								<div className=" w-60 sm:w-60 h-full">
									<Image src={foceni2} width="300" height="200" alt="hero" />
								</div>
							</Card>
						</div>
						<div className="flex-col flex-center w-full mt-12 xl:w-3/12 xl:mt-0">
							<Card>
								<div className=" w-60 sm:w-60 h-full">
									<Image src={foceni3} width="300" height="200" alt="hero" />
								</div>
							</Card>
						</div>
						<div className="flex-col flex-center w-full mt-12 xl:w-3/12 xl:mt-0">
							<Card>
								<div className=" w-60 sm:w-60 h-full">
									<Image src={foceni4} width="300" height="200" alt="hero" />
								</div>
							</Card>
						</div>
						<div className="flex-col flex-center w-full mt-12 xl:w-3/12 xl:mt-0">
							<Card>
								<div className=" w-60 sm:w-60 h-full">
									<Image src={foceni5} width="300" height="200" alt="hero" />
								</div>
							</Card>
						</div>
						<div className="flex-col flex-center w-full mt-12 xl:w-3/12 xl:mt-0">
							<Card>
								<div className=" w-60 sm:w-60 h-full">
									<Image src={foceni6} width="300" height="200" alt="hero" />
								</div>
							</Card>
						</div> */}
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
