import React from 'react'
import ScrollUpBtn from 'components/ScrollUpBtn'
import Navigation from 'components/Navigation'
import Hero from 'components/Hero'
import Music from 'components/Music'
import People from 'components/People'
import Gallery from 'components/Gallery'
import News from 'components/News'
import Contact from 'components/Contact'
import { fetchAPI } from 'lib/api'

import styles from 'styles/Home.module.css'

export default function Home({ global, songs, people, photos, posts }) {
	return (
		<>
			{/* {global && <HeadWrapper global={global} />} */}
			<div className="content flex-row">
				<ScrollUpBtn />
				<div className="flex-col w-2/12">
					<Navigation />
				</div>
				<div className="container flex-col w-10/12">
					<Hero />
					{/* {songs && <Music songs={songs} />}
					{people && <People people={people} />}
					{photos && <Gallery photos={photos} />}
					{posts && <News posts={posts} />} */}
					<People people={people} />
					<Gallery photos={photos} />
					<News posts={posts} />
					<Contact />
				</div>
			</div>
			<div className="flex-row flex-center">&copy; {new Date().getFullYear()} | Steepens</div>
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
