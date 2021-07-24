import Image from 'next/image'

export default function Hero() {
  return (
    <div className="content container">
      <Image src={require('../public/steepens-logo-white.svg')} width="1000" height="500" layout="responsive" alt="hero"/>
    </div>
  )
}