import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'

const images = [
	'/rockhill/1.jpg',
	'/rockhill/2.jpg',
	'/rockhill/3.jpg',
	'/rockhill/4.jpg',
	'/rockhill/5.jpg',
	'/foceni/1.png',
	'/foceni/2.png',
	'/foceni/3.png',
	'/foceni/4.png',
	'/foceni/5.png',
	'/foceni/6.png',
	'/foceni/7.png',
	'/foceni/8.png',
	'/kapela/barca.png',
	'/kapela/martin.png',
	'/kapela/kuba.png',
	'/kapela/peta.png',
	'/kapela/izzy.png',
]

export default class LightboxGallery extends Component {
	constructor(props) {
		super(props)

		this.state = {
			photoIndex: props.i,
			isOpen: false,
		}
	}

	render() {
		const { photoIndex, isOpen } = this.state

		return (
			<div>
				<button type="button" onClick={() => this.setState({ isOpen: true })}>
					{this.props.children}
				</button>

				{isOpen && (
					<Lightbox
						mainSrc={images[photoIndex]}
						nextSrc={images[(photoIndex + 1) % images.length]}
						prevSrc={images[(photoIndex + images.length - 1) % images.length]}
						nextLabel="next"
						prevLabel="prev"
						onCloseRequest={() => this.setState({ isOpen: false })}
						onMovePrevRequest={() =>
							this.setState({
								photoIndex: (photoIndex + images.length - 1) % images.length,
							})
						}
						onMoveNextRequest={() =>
							this.setState({
								photoIndex: (photoIndex + 1) % images.length,
							})
						}
					/>
				)}
			</div>
		)
	}
}
