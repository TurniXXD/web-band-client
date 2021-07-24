import Socials from './Contact/Socials'
import Form from './Contact/Form'

export default function Contact({ Component, pageProps }) {
  return (
    <div id="kontakt" className="content container">
      <h1>kontakt</h1>
      <Socials></Socials>
      <Form></Form>
    </div>
  )
}