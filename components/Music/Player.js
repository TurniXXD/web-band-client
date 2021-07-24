import Image from 'next/image'
import Placeholder from '../../public/steepens-logo-rectangle.png'
// import react DOM
const API_URL = process.env.API_URL
/* const musicContainer = document.getElementById('music-player-container')
const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const audio = document.getElementById('audio')
const musicProgress = document.getElementById('music-progress')
const musicProgressBar = document.getElementById('music-progress-bar')
const musicTitle = document.getElementById('music-title')
const musicCover = document.getElementById('music-cover')

// Song titles
const songs = ['Liar', 'Loved', 'Dual self', 'Secret message']

// Keep track of the songs
let songIndex = 2

// Initialy load song into DOM
loadSong(songs[songIndex])

// Update song details
function loadSong(song) {
	musicTitle.innerText = song
	audio.src = `@music/${song}.mp3`
}

function playSong() {
	musicContainer.classList.add('play')
	playBtn.classList.remove('typcn-media-play-outline')
	playBtn.classList.add('typcn-media-pause-outline')

	var playPromise = audio.play()
	
	if (playPromise !== undefined) {
    playPromise.then(_ => {
			audio.play()
    })
    .catch(error => {
			audio.pause()
    });
  }
}

function pauseSong() {
	musicContainer.classList.remove('play')
	playBtn.classList.remove('typcn-media-pause-outline')
	playBtn.classList.add('typcn-media-play-outline')

	audio.pause()
}

function nextSong() {

}

function prevSong() {

}

// Event listeners
playBtn.addEventListener('click', () => {
	if(musicContainer.classList.contains('play')) {
		pauseSong()
	} else {
		playSong()
	}
})


// Change songs events
prevBtn.addEventListener('click', () => {
	songIndex--
	// in case of first song it will loop back to the last song
	if(songIndex < 0) {
		songIndex = songs.length -1
	}

	loadSong(songs[songIndex])

	playSong()
})

nextBtn.addEventListener('click', () => {
	songIndex++
	// in case of last song it will loop back to the first song
	if(songIndex > songs.length -1) {
		songIndex = 0
	}

	loadSong(songs[songIndex])

	playSong()
}) */

/* audio.addEventListener('timeupdate', (e) => {
	const {duration, currentTime} = e.srcElement
	const progressPercent = (currentTime / duration) * 100
	progressPercent.style.width = `${progressPercent}%`
})

musicProgressBar.addEventListener('click', (e) => {
	const width = this.clientWidth
	const clickX = e.offsetX
	const duration = audio.duration

	audio.currentTime = (clickX / width) * duration
})

audio.addEventListener('ended', nextSong) */


export default function Player({ Component, pageProps, children, songs }) {
  return (
    <div  id="music-player-container" className="content col flex-center">
      <div className="img-container">
        <Image src={Placeholder} alt="Barča Mikulová" id="music-cover" className="rounded-img" width="200" height="200" />
      </div>
      <audio src="" id="audio"></audio>
      <span id="music-title"></span>
      <div className="music-nav row flex-center">
          <div className="col flex-center">
              <span id="prev" className="action-btn typcn typcn-media-rewind-outline flex-center"></span>
          </div>
          <div className="col flex-center">
              <span id="play" className="action-btn typcn typcn-media-play-outline flex-center"></span>
          </div>
          <div className="col flex-center">
              <span id="next" className="action-btn typcn typcn-media-fast-forward-outline flex-center"></span>
          </div>
      </div>
      <div className="progress-container col">
          <div id="music-progress" className="row">
              <div id="music-progress-bar"></div>
          </div>
          <div className="music-progress-time row">
              <div id="start-time" className="col">00:00</div>
              <div id="end-time" className="col">03:24</div>
          </div>
      </div>
  </div>
  );
}

// next song => fetch song with id +1

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch(`${API_URL}/songs/`)
  const posts = await res.json()
  console.log(songs)
  return {
    props: { songs }
  }
}