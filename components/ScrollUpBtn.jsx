import { useEffect, useState } from 'react'
import Image from 'next/image'
import scrollUp from '../public/scroll-up-btn.png'

export default function ScrollUpBtn() {
const [scrollToTop, setScrollToTop] = useState(false)

	useEffect(() => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
		setScrollToTop(false)
	}, [scrollToTop])

	return (
		<div className="scroll-up-btn-wrapper">
			<button id="scroll-up-btn" title="Jít nahoru" onClick={() => setScrollToTop(true)}>
				<Image src={scrollUp} width="35" height="55" alt="Jít nahoru" />
			</button>
		</div>
	)
}
