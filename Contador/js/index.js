import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Events from "./events.js"
import {
  btnPlay,
  btnPause,
  btnStop,
  btnTimer,
  displayMinutes,
  displaySeconds,
} from "./elements.js"


const controls = Controls({
  btnPlay, 
  btnPause, 
  btnTimer,
  btnStop
})

const timer = Timer({
  displayMinutes, 
  displaySeconds, 
  resetControls: controls.reset
  
})

const sounds = Sounds()

Events({controls, timer, sounds})