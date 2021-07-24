import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Post({ Component, pageProps }) {
  const imgLoader = () => {
    return `http://localhost:1337/uploads/band_snake_48be4bfacf.jpg`
  }

  return (
    <div className="content">
      {/* loop over the posts */}
      <Link as={`/post/${post.slug}`} href="/post/[id]">
        <a>
sss
        </a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch(`${API_URL}/posts/`)
  const posts = await res.json()
  console.log(posts)
  console.log(API_URL + posts[0].image[0].url)
  return {
    props: { posts }
  }
}