import styles from 'styles/People.module.css'
import Image from 'next/image'
import placeholder from 'public/steepens-logo-rectangle.png'

export default function People({ Component, pageProps }) {
	return (
		<div id="clenove" className="content container col flex-center">
			<div className="flex-row flex-center mb-8">
				<div className="flex-col">
					<h2 className="text-4xl">Naše banda</h2>
				</div>
			</div>
			<div className="flex flex-wrap flex-center sm:space-x-12 md:space-x-24">
				{/* {people && people.map(people => {
        return (
          <div className="flex-col">
            <div className="people-card">
              <Image src={people?.image[0].formats?.small.url || placeholder} alt={people?.image[0].formats?.small.name} className="rounded-img" width="200" height="200" />
              <span className="name">{people?.name}</span>
              <span className="position">{people?.position}</span>
            </div>
          </div>
        )
      })} */}
				<div className="flex-col">
					<div className="people-card">
						{/* <Imakge src={placeholder} alt="Barča Mikulová" className="rounded-img" width="200" height="200" /> */}
						<div className="flex-row">
							<h2 className="text-3xl sm:text-4xl mb-2">Barča Mikulová</h2>
						</div>
						<div className="flex-row flex-center">
							<span className="text-lg mb-4">Zpěv</span>
						</div>
						<div className="flex-row">
							<span className="text-lg mb-2">Oblíbená hudba:</span>
						</div>
						<div className="flex-row">
							<div className="flex-col">
								<div className="flex-row">
									<div className="flex-col">
										<span>Nirvana</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Seether</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Red Hot Chilli Peppers</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Motionless in while</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>The Pretty Reckless</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Three days grace</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-col">
					<div className="people-card">
						{/* <Image src={placeholder} alt="Martin Kopřiva" className="rounded-img" width="200" height="200" /> */}
						<div className="flex-row">
							<h2 className="text-3xl sm:text-4xl mb-2">Martin Kopřiva</h2>
						</div>
						<div className="flex-row flex-center">
							<span className="text-lg mb-4">Bicí</span>
						</div>
						<div className="flex-row">
							<span className="text-lg mb-2">Oblíbená hudba:</span>
						</div>
						<div className="flex-row">
							<div className="flex-col">
								<div className="flex-row">
									<div className="flex-col">
										<span>Metallica</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Nirvana</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>The Pretty Reckless</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Tři sestry</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>David Stypka & Bandjeez</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Mňága a Žďorp</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-col">
					<div className="people-card">
						{/* <Image src={placeholder} alt="Jakub Vantuch" className="rounded-img" width="200" height="200" /> */}
						<div className="flex-row">
							<h2 className="text-3xl sm:text-4xl mb-2">Jakub Vantuch</h2>
						</div>
						<div className="flex-row flex-center">
							<span className="text-lg mb-4">Sólová kytara</span>
						</div>
						<div className="flex-row">
							<span className="text-lg mb-2">Oblíbená hudba:</span>
						</div>
						<div className="flex-row">
							<div className="flex-col">
								<div className="flex-row">
									<div className="flex-col">
										<span>Metallica</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Nirvana</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Foo Fighters</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Tři sestry</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Horkýže slíže</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>AC/DC</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-col mt-8">
					<div className="people-card">
						{/* <Image src={placeholder} alt="Petr Kožušník" className="rounded-img" width="200" height="200" /> */}
						<div className="flex-row">
							<h2 className="text-3xl sm:text-4xl mb-2">Petr Kožušník</h2>
						</div>
						<div className="flex-row flex-center">
							<span className="text-lg mb-4">Rytmická kytara</span>
						</div>
						<div className="flex-row">
							<span className="text-lg mb-2">Oblíbená hudba:</span>
						</div>
						<div className="flex-row">
							<div className="flex-col">
								<div className="flex-row">
									<div className="flex-col">
										<span>Alice in chains</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Motörhead</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Mötley Crüe</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Ozzy Osbourne</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Black Label Society</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Arakain</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-col mt-8">
					<div className="people-card">
						{/* <Image src={placeholder} alt="Filip Šmehlík" className="rounded-img" width="200" height="200" /> */}
						<div className="flex-row">
							<h2 className="text-3xl sm:text-4xl mb-2">Filip Šmehlík</h2>
						</div>
						<div className="flex-row flex-center">
							<span className="text-lg mb-4">Basa</span>
						</div>
						<div className="flex-row">
							<span className="text-lg mb-2">Oblíbená hudba:</span>
						</div>
						<div className="flex-row">
							<div className="flex-col">
								<div className="flex-row">
									<div className="flex-col">
										<span>Alice in chains</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Motörhead</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Mötley Crüe</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Ozzy Osbourne</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Black Label Society</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Arakain</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
