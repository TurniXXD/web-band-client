import React from 'react'
import Image from 'next/image'

const scrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default function ScrollUpBtn() {
  return (
    <div className="scroll-up-btn-wrapper">
      <button id="scroll-up-btn" title="Jít nahoru" onClick={scrollToTop()}>
        <Image src="/public/steepens-logo-rectangle.png" width="75" height="75" alt="Jít nahoru" />
      </button>
    </div>
  )
}