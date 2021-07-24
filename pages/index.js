import React from "react";
import styles from '../styles/Home.module.css'
import Navigation from 'components/Navigation'
import Hero from 'components/Hero'
import Music from 'components/Music'
import People from 'components/People'
import Gallery from 'components/Gallery'
import News from 'components/News'
import Contact from 'components/Contact'
import { fetchAPI } from 'lib/api'

export default function Home({ posts, songs, photos }) {
  console.log(posts)
  return (
    <div className="content" >
      <Navigation></Navigation>
      <Hero></Hero>
      <Music songs={songs}></Music>
      <People></People>
      <Gallery photos={photos}></Gallery>
      <News posts={posts}></News>
      <Contact></Contact>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const [posts, songs, photos] = await Promise.all([
      fetchAPI('posts'),
      fetchAPI('songs'),
      fetchAPI('photos')
    ])

    console.log(`${posts}\n${songs}\n${photos}`)

    return {
      props: { posts, songs, photos },
      // ability to add dynamic pieces by revalidating the code and not having to rebuild each time
      //revalidate: 1,
    };
  } catch (error) {
    return {
      props: null
    }
  }
}