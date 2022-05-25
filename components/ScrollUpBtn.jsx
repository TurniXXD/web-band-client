import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'
import scrollUp from '../public/scroll-up-btn.png'

export default function ScrollUpBtn() {
	return (
		<div className="scroll-up-btn-wrapper">
			<button id="scroll-up-btn" title="Jít nahoru" onClick={() => scroll.scrollToTop()}>
				<Image src={scrollUp} width="35" height="55" alt="Jít nahoru" />
			</button>
		</div>
	)
}
