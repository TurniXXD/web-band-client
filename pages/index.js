import React from "react";
import styles from 'styles/Home.module.css'
import Navigation from 'components/Navigation'
import ScrollUpBtn from "components/ScrollUpBtn";
import Hero from 'components/Hero'
import Music from 'components/Music'
import People from 'components/People'
import Gallery from 'components/Gallery'
import News from 'components/News'
import Contact from 'components/Contact'
import { fetchAPI } from 'lib/api'

import PropTypes from 'prop-types';

export default function Home({ posts, songs, photos }) {
  return (
    <div className="content row" >
      <ScrollUpBtn></ScrollUpBtn>
      <div className="col-2">
        <Navigation></Navigation>
      </div>
      <div className="col-10">
        <Hero></Hero>
        <Music songs={songs}></Music>
        <People></People>
        <Gallery photos={photos}></Gallery>
        <News posts={posts}></News>
        <Contact></Contact>
      </div>
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