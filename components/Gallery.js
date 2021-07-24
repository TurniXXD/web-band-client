import React from 'react'
import Image from 'next/image'

export default function Gallery({ photos }) {

  // 16:9 ratio
  const width = 250
  const height = 140.63

  return (
    <div id="foto" className="container container">
      <h1>Foto</h1>
      {photos && photos.map((photo) => {
        return (
          <div key={photo.id}>
            <Image src={photo.image[0].formats.medium.url} width={width} height={height} alt={photo.image[0].formats.medium.name}/>
          </div>
        )
      })}
    </div>
  )
}