import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import propTypes from 'prop-types';

const IMAGES_LOADER = process.env.IMAGES_LOADER

export default function News({ posts }) {
  console.log(posts)

  const width = 200
  const height = 250

  return (
    <div id="aktuality" className="content container">
      <h1>News</h1>
      <div>
        {posts && posts.map((post) => {
          return (
            <div key={post.id} className="row">
              <div className="col" >
                <div className="row" style={{width:300 + 'px'}}>
                  <Image src={post.image[0].formats.medium.url} width={width} height={height} alt={post.image[0].formats.medium.name}/>
                </div>
              </div>
              <div className="col">
                <h2>{post.title}</h2> <br/>
                <p>{post.description}</p> <br/>
                <span>
                  {() => {
                    return (post.soldOut ? <div>Vyprodáno</div> : <div>Dostupné</div>)
                  }}  
                </span> <br/>
                <Link href={post.ticketsLink}><a target="_blank" rel="noreferrer noopener nofollow">Vstupenky</a></Link> <br/>
                <span>{post.createdAt}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
/* 
News.propTypes = {
  posts: propTypes.func.isRequired
} */