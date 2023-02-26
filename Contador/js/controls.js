export default function Controls({btnPlay, btnPause, btnTimer, btnStop}) {

  function play() {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    btnTimer.classList.add('hide')
    btnStop.classList.remove('hide')
  }

  function pause() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }

  function reset() {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
    btnTimer.classList.remove('hide')
    btnStop.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Digite os minutos:')
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  }
}

 

