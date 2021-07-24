import Image from 'next/image'
import Placeholder from '../public/steepens-logo-rectangle.png'

export default function People({ Component, pageProps }) {
  return (
    <div id="clenove" className="content container col flex-center">
      <h1>People</h1>
      <div className="row flex-center">
        <div className="col">
          <div className="card">
            <Image src={Placeholder} alt="Barča Mikulová" className="rounded-img" width="200" height="200" />
            <span>Barča Mikulová</span>
            <p>zpěv</p>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Image src={Placeholder} alt="Martin Kopřiva" className="rounded-img" width="200" height="200" />
            <span>Martin Kopřiva</span>
            <p>bicí</p>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Image src={Placeholder} alt="Jakub Vantuch" className="rounded-img" width="200" height="200" />
            <span>Jakub Vantuch</span>
            <p>kytara, zpěv</p>
          </div>
        </div>
      </div>
      <div className="row flex-center">
        <div className="col">
          <div className="card">
            <Image src={Placeholder} alt="Petr Kožušník" className="rounded-img" width="200" height="200" />
            <span>Petr Kožušník</span>
            <p>kytara</p>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Image src={Placeholder} alt="Filip Šmehlík" className="rounded-img" width="200" height="200" />
            <span>Filip Šmehlík</span>
            <p>basa</p>
          </div>
        </div>
      </div>
    </div>
  )
}