import styles from 'styles/Music.module.css'

const playSong = (song) => {

}

export default function Music({ songs }) {
  return (
    <div id="tvorba" className="content container">
      <h1>Music</h1>
        <div id="player-wrapper" className="row">
          <div className="col">

          </div>
        </div>
        <div id="song-list-wrapper" className="row">
          <div className="col">
            {songs && songs.map((song) => {
              return (
                <div key={song.id} className="row">
                  <button onlick={playSong()}>

                  </button>
                  <span>{song.title}</span> <br/>
                </div>
              )
            })}
          </div>
        </div>
    </div>
  )
}