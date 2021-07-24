import Image from 'next/image'
import Link from 'next/link'
const API_URL = process.env.API_URL

export default function Photo({ Component, pageProps, children }) {
  return (
    <div className="content">
      { children }
    </div>
  );
}