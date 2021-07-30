import React from 'react'
import Image from 'next/image'
import styles from 'styles/Gallery.module.css'


export default function Gallery({ photos }) {
  return (
    <div id="foto" className="content container">
      <h1>Foto</h1>
      <div id="gallery-wraper">
        <div className="col">
          {photos && photos.map((photo) => {
            return (
              <div key={photo.id} className="row">
                <Image src={photo.image[0].formats.medium.url} width={250} height={140.63} alt={photo.image[0].formats.medium.name}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}