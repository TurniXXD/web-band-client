import Player from './Music/Player'
import Playlist from './Music/Playlist'

export default function News({ Component, pageProps }) {
  return (
    <div id="tvorba" className="content container">
      <h1>Music</h1>
      <Player></Player>
      <Playlist></Playlist>
    </div>
  )
}