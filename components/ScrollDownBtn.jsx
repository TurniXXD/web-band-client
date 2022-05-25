import { useEffect, useState } from 'react'
import { Link as RSLink } from 'react-scroll'
import Image from 'next/image'
import scrollDown from '../public/scroll-down-btn.png'

export default function ScrollUpBtn() {
	return (
		<div className="scroll-down-btn-wrapper">
			<RSLink activeClass="active" className="nav-item-link" to="aktuality" spy={true} smooth={true} duration={500}>
				<button id="scroll-down-btn">
					<Image src={scrollDown} width="35" height="55" alt="Jít nahoru" />
				</button>
			</RSLink>
		</div>
	)
}
