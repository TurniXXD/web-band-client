import Tilt from 'react-vanilla-tilt'

export default function Card({ children }) {
	return (
		<div className="card-wrapper">
			<Tilt>
				<div className="card">
					<span className="card-corner-tl"></span>
					<span className="card-corner-br"></span>
					{children}
				</div>
			</Tilt>
		</div>
	)
}
