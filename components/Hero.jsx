import Image from 'next/image'
import hero from '/public/steepens-logo-white.svg'

export default function Hero() {
	return (
		<div className="content container">
			<Image
				src={hero}
				width="1000"
				height="500"
				alt="hero"
			/>
		</div>
	)
}
