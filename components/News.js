import styles from 'styles/News.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function News({ posts }) {
  return (
    <div id="aktuality" className="content container">
      <h1>News</h1>
      <div id="news-wrapper">
        {posts && posts.map((post) => {
          return (
            <div key={post.id} className="row">
              <div className="col" >
                <div className="row" style={{width:300 + 'px'}}>
                  <Image src={post.image[0].formats.medium.url} width={200} height={250} alt={post.image[0].formats.medium.name}/>
                </div>
              </div>
              <div className="col">
                <h2>{post.title}</h2> <br/>
                <p>{post.description}</p> <br/>
                <div>
                  {() => {
                    return (post.soldOut ? <span>Vyprodáno</span> : <span>Dostupné</span>)
                  }}  
                </div> <br/>
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