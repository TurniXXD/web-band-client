import styles from 'styles/People.module.css'
import Image from 'next/image'
import placeholder from 'public/steepens-logo-rectangle.png'

export default function People({ Component, pageProps }) {
  return (
    <div id="clenove" className="content container col flex-center">
      <h1>People</h1>
      <div className="row flex-center">
      {/* {people && people.map(people => {
        return (
          <div className="col">
            <div className="people-card">
              <Image src={people?.image[0].formats?.small.url || placeholder} alt={people?.image[0].formats?.small.name} className="rounded-img" width="200" height="200" />
              <span className="name">{people?.name}</span>
              <span className="position">{people?.position}</span>
            </div>
          </div>
        )
      })} */}
        <div className="col">
          <div className="people-card">
            <Image src={placeholder} alt="Barča Mikulová" className="rounded-img" width="200" height="200" />
            <span>Barča Mikulová</span>
            <p>zpěv</p>
          </div>
        </div>
        <div className="col">
          <div className="people-card">
            <Image src={placeholder} alt="Martin Kopřiva" className="rounded-img" width="200" height="200" />
            <span>Martin Kopřiva</span>
            <p>bicí</p>
          </div>
        </div>
        <div className="col">
          <div className="people-card">
            <Image src={placeholder} alt="Jakub Vantuch" className="rounded-img" width="200" height="200" />
            <span>Jakub Vantuch</span>
            <p>kytara, zpěv</p>
          </div>
        </div>
      </div>
      <div className="row flex-center">
        <div className="col">
          <div className="people-card">
            <Image src={placeholder} alt="Petr Kožušník" className="rounded-img" width="200" height="200" />
            <span>Petr Kožušník</span>
            <p>kytara</p>
          </div>
        </div>
        <div className="col">
          <div className="people-card">
            <Image src={placeholder} alt="Filip Šmehlík" className="rounded-img" width="200" height="200" />
            <span>Filip Šmehlík</span>
            <p>basa</p>
          </div>
        </div>
      </div>
    </div>
  )
}