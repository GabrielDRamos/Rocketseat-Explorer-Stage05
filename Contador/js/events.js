import {
  btnPlay,
  btnPause,
  btnStop,
  btnTimer,
  btnUnmute,
  btnMute
} from "./elements.js"

export default function events ({controls, timer, sounds}) {
  btnPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
    sounds.buttonPress()
  })

  btnPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
    sounds.buttonPress()
  })

  btnStop.addEventListener('click', () => {
    controls.reset()
    timer.reset()
    sounds.buttonPress()
    
  })

  btnUnmute.addEventListener('click', () => {
    btnUnmute.classList.add('hide')
    btnMute.classList.remove('hide')
    sounds.bgAudio.play()
    
  })

  btnMute.addEventListener('click', () => {
    btnUnmute.classList.remove('hide')
    btnMute.classList.add('hide')
    sounds.bgAudio.pause()
  })

  btnTimer.addEventListener('click', () => {
    let newMinutes = controls.getMinutes()
    if (!newMinutes) {
      timer.reset()
      return
    }
    timer.updateTimerDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  } )

}