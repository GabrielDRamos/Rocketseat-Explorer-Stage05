const btnPlay = document.querySelector('.btn-play')
const btnPause = document.querySelector('.btn-pause')
const btnStop = document.querySelector('.btn-stop')
const btnTimer = document.querySelector('.btn-timer')
const btnUnmute = document.querySelector('.btn-unmute')
const btnMute = document.querySelector('.btn-mute')
let minutes
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

function countdown () {
  setTimeout(() => {
    let seconds = Number(displaySeconds.textContent)
    let minutes = Number(displayMinutes.textContent)

    if (seconds <= 0) {
      seconds = 60
      displayMinutes.textContent = minutes - 1
      
    }

    displaySeconds.textContent = seconds - 1
    countdown()
  }, 1000)

 
}

btnPlay.addEventListener('click', () => {
  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')
  btnTimer.classList.add('hide')
  btnStop.classList.remove('hide')

  countdown()
})

btnPause.addEventListener('click', () => {
  btnPause.classList.add('hide')
  btnPlay.classList.remove('hide')
  
})

btnStop.addEventListener('click', () => {
  btnPlay.classList.remove('hide')
  btnPause.classList.add('hide')
  btnTimer.classList.remove('hide')
  btnStop.classList.add('hide')
})

btnUnmute.addEventListener('click', () => {
  btnUnmute.classList.add('hide')
  btnMute.classList.remove('hide')
})

btnMute.addEventListener('click', () => {
  btnUnmute.classList.remove('hide')
  btnMute.classList.add('hide')
})

btnTimer.addEventListener('click', () => {
  minutes = prompt('Digite os minutos: ')
  displayMinutes.textContent = minutes
} )
