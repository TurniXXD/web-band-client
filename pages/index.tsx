import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Element as Section, Link as RSLink } from 'react-scroll'
import Image from 'next/image'
import Slider from 'react-slick'
import ScrollUpBtn from '@components/ScrollUpBtn'
import ScrollDownBtn from '@components/ScrollDownBtn'
import Navigation from '@components/Navigation'
import Music from '@components/Music'
import Card from '@components/Card'
import LightboxGallery from '@components/LightboxGallery'
import { people } from '../data/people'
import { iPeople, iFavoriteMusic } from '../graphql/models/model'
import { settings } from '../data/sliderSettings'
import News from '@components/News'
import Footer from '@components/Footer'
import { fetchAPI } from 'lib/api'

import placeholder from 'public/steepens-logo-rectangle.png'
import { HeaderSvg } from 'public/js-svg/header'

import logo from 'public/steepens-logo-white.svg'

import foceni1 from 'public/foceni/1.png'
import foceni2 from 'public/foceni/2.png'
import foceni3 from 'public/foceni/3.png'

import debutPoster from 'public/aktuality/debut-poster.png'
import rockhill from 'public/aktuality/rockhill.png'
import zostra from 'public/aktuality/zostra.png'
import positive from 'public/aktuality/positive.png'
import izzy from 'public/kapela/izzy.png'
import kuba from 'public/kapela/kuba.png'
import martin from 'public/kapela/martin.png'
import peta from 'public/kapela/peta.png'
import barca from 'public/kapela/barca.png'

import rockhill1 from 'public/rockhill/1.jpg'
import rockhill2 from 'public/rockhill/2.jpg'
import rockhill3 from 'public/rockhill/3.jpg'
import rockhill4 from 'public/rockhill/4.jpg'
import rockhill5 from 'public/rockhill/5.jpg'

export default function Home(/* { global, songs, people, photos, posts } */) {
	let galleryContent = [rockhill1, rockhill2, rockhill3, rockhill4, rockhill5, foceni1, foceni2, foceni3]
	const [menu, setMenu] = useState(false)

	useEffect(() => {
		const menuEl = document.getElementsByClassName('menu')[0]
		const header = document.getElementsByClassName('header-bar')[0]
		const links = document.getElementsByClassName('mobile-nav-items')[0]

		if (menu) {
			menuEl.className = 'menu mobile-nav-item active'
			header.className = 'header-bar absolute top-0 z-10 h-60'
			links.className = 'mobile-nav-items flex-row flex-center mobile-active'
		} else {
			menuEl.className = 'menu mobile-nav-item not-active'
			header.className = 'header-bar absolute top-0 z-10 h-65px'
			links.className = 'mobile-nav-items flex-row flex-center mobile-inactive'
		}
	}, [menu])

	return (
		<>
			<ScrollUpBtn />
			<div className="page-wrapper">
				<div id="header-desktop-nav" className="flex-row items-center">
					<div className="absolute flex-col items-center top-0 z-20 h-full w-full">
						<HeaderSvg />
					</div>
				</div>
				<div id="header-bar" className="header-bar absolute top-0 z-10">
					<div className="flex-row justify-between items-center mt-2">
						<div className="flex-col header-mobile-nav ml-4">
							<Image src={logo} width="150" height="45" />
						</div>
						<div onClick={() => setMenu((state) => !state)} className="flex-col mr-5">
							<div className="menu mobile-nav-item not-active">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</div>
					<div className="mobile-nav-items flex-row flex-center mobile-inactive">
						<ul className="flex-col justify-center">
							<li className="flex-row">
								<RSLink activeClass="active" className="nav-item-link" to="aktuality" spy={true} smooth={true} duration={500}>
									<span className="nav-item">Aktuality</span>
								</RSLink>
							</li>
							<li className="flex-row">
								<RSLink activeClass="active" className="nav-item-link" to="tvorba" spy={true} smooth={true} duration={500}>
									<span className="nav-item">Tvorba</span>
								</RSLink>
							</li>
							<li className="flex-row">
								<RSLink activeClass="active" className="nav-item-link" to="kapela" spy={true} smooth={true} duration={500}>
									<span className="nav-item">Kapela</span>
								</RSLink>
							</li>
							<li className="flex-row">
								<RSLink activeClass="active" className="nav-item-link" to="galerie" spy={true} smooth={true} duration={500}>
									<span className="nav-item">Galerie</span>
								</RSLink>
							</li>
							<li className="flex-row">
								<RSLink activeClass="active" className="nav-item-link" to="kontakty" spy={true} smooth={true} duration={500}>
									<span className="nav-item">Kontakty</span>
								</RSLink>
							</li>
						</ul>
					</div>
				</div>
				<Slider {...settings}>
					<div className="flex-row bg-cover">
						<div className="paralax-wrapper next-image-wrapper">
							<Image src={rockhill1} alt="fajne" layout="fill" />
						</div>
					</div>
					<div className="flex-row bg-cover">
						<div className="paralax-wrapper next-image-wrapper">
							<Image src={rockhill2} alt="fajne" layout="fill" />
						</div>
					</div>
					<div className="flex-row bg-cover">
						<div className="paralax-wrapper next-image-wrapper">
							<Image src={rockhill3} alt="fajne" layout="fill" />
						</div>
					</div>
					<div className="flex-row bg-cover">
						<div className="paralax-wrapper next-image-wrapper">
							<Image src={rockhill4} alt="fajne" layout="fill" />
						</div>
					</div>
					<div className="flex-row bg-cover">
						<div className="paralax-wrapper next-image-wrapper">
							<Image src={rockhill5} alt="fajne" layout="fill" />
						</div>
					</div>
				</Slider>
				<ScrollDownBtn />
				<Section name="aktuality" className="element">
					<div id="aktuality" className="container sm:mt-32">
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
										<div className="flex-col py-4 sm:py-8 px-5 sm:p-12">
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
												<div className="flex grow items-center aktuality-title">
													<h2 className="text-xl-1-5 sm:text-6xl mb-2">Debut</h2>
												</div>
											</div>
											<Link href="https://goo.gl/maps/ppDvvjceik2Skrpr9">
												<a target="_blank" rel="noreferrer noopener">
													<div className="flex-row">
														<div className="flex-col">
															<span className="typcn typcn-location-outline mr-2 text-base sm:text-xl"></span>
														</div>
														<div className="flex-col">
															<span className="text-base sm:text-xl">7.5. 2022 Rock Hill OSTRAVA</span>
														</div>
													</div>
												</a>
											</Link>
											<div className="aktuality-p flex-row mt-6">
												<p>
													Po dlouh?? dob?? zkou??en?? a p??ek????k??ch v tvorb?? n??s ??ek?? prvn?? p??edstaven?? na???? hard & heavy tvorby v klubu Rock Hill v Ostrav??. Spole??n?? s n??mi zahraje zku??en?? Punk'n'Rollov?? kapela Positive, se kter??mi zahraje, m??stn??m i p??espoln??m dosti zn??m?? formace, Zostra.
												</p>
											</div>
											<div className="flex-row mt-10 sm:mt-4">
												<div className="flex-col">
													<span className="text-base sm:text-lg">Vlezn??: 150K??</span>
												</div>
											</div>
											<div className="flex-row mt-4 sm:mt-10">
												<div className="flex-col">
													<span className="text-base sm:text-lg">V??ce informac?? {' '}
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
						{/* <div className="cards-wrapper flex flex-wrap flex-center xl:space-x-28">
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
										<div className="flex-col py-4 sm:py-8 px-5 sm:p-12">
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
												<div className="flex grow items-center aktuality-title">
													<h2 className="text-xl-1-5 sm:text-6xl mb-2">Debut</h2>
												</div>
											</div>
											<Link href="https://goo.gl/maps/ppDvvjceik2Skrpr9">
												<a target="_blank" rel="noreferrer noopener">
													<div className="flex-row">
														<div className="flex-col">
															<span className="typcn typcn-location-outline mr-2 text-base sm:text-xl"></span>
														</div>
														<div className="flex-col">
															<span className="text-base sm:text-xl">22.7. Are??l n??rodn??ho domu ve Fr??dku-M??stku</span>
														</div>
													</div>
												</a>
											</Link>
											<div className="aktuality-p flex-row mt-6">
												<p>

												</p>
											</div>
											<div className="flex-row mt-10 sm:mt-4">
												<div className="flex-col">
													<span className="text-base sm:text-lg">Vlezn??: 150K??</span>
												</div>
											</div>
											<div className="flex-row mt-4 sm:mt-10">
												<div className="flex-col">
													<span className="text-base sm:text-lg">V??ce informac?? {' '}
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
						</div> */}
					</div>
				</Section>
				<Section name="tvorba" className="element">
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
										src="https://www.youtube.com/embed/lwUN987ziRg"
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
										src="https://www.youtube.com/embed/YkXOYiAYJfk"
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
										src="https://www.youtube.com/embed/so-DNh3W_Ik"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									/>
								</Card>
							</div>
						</div>
					</div>
				</Section>
				<Section name="kapela" className="element">
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
								return (
									<div key={person.name} className="person flex-col">
										<Card>
											<div className="flex-row flex-center">
												{i == 0 && <Image src={barca} width="400" height="266" alt="hero" priority={true} />}
												{i == 1 && <Image src={martin} width="400" height="266" alt="hero" priority={true} />}
												{i == 2 && <Image src={kuba} width="400" height="266" alt="hero" priority={true} />}
												{i == 3 && <Image src={peta} width="400" height="266" alt="hero" priority={true} />}
												{i == 4 && <Image src={izzy} width="400" height="266" alt="hero" priority={true} />}
											</div>
											<div className="flex-row flex-center mx-8 mt-8">
												<h2 className="text-xl-1-5 sm:text-4xl mb-2">{person.name}</h2>
											</div>
											<div className="flex-row flex-center mx-8">
												<span className="text-lg mb-4">{person.position}</span>
											</div>
											<div className="flex-row mx-8 sm:mx-16">
												<span className="text-lg mb-2">Obl??ben?? hudba:</span>
											</div>
											<div className="flex-row mx-8 sm:mx-16 mb-8">
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
				</Section>
				<Section name="galerie" className="element">
					<div id="galerie" className="container mt-20 sm:mt-32">
						<div className="flex-row flex-center mb-4 sm:mb-20">
							<div className="flex-col">
								<h2 className="text-5xl sm:text-6xl">Galerie</h2>
							</div>
						</div>
						<div className="cards-wrapper flex flex-wrap flex-center xl:gap-y-16">
							{galleryContent.map((item: any, i: number) => {
								return (
									<div className="gallery-cards flex-col flex-center w-full sm:w-6/12 mt-12 xl:w-3/12 xl:mt-0">
										<Card>
											<div className="w-60 sm:w-60 h-full">
												<LightboxGallery i={i - 1}><Image src={galleryContent[i]} width="300" height="200" alt="hero" priority={true} /></LightboxGallery>
											</div>
										</Card>
									</div>
								)
							})
							}
						</div>
					</div>
				</Section>
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
