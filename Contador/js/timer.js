import Sounds from "./sounds.js"


export default function Timer({displayMinutes, displaySeconds, resetControls}) {

  let timeOut
  let minutes = Number(displayMinutes.textContent)
  
  function updateTimerDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ?  minutes : newMinutes
  seconds = seconds === undefined ?  0 : seconds
  displayMinutes.textContent = String(newMinutes).padStart(2,"0")
  displaySeconds.textContent = String(seconds).padStart(2,"0")
}

  function updateMinutes(newMinutes){
    minutes = newMinutes
  }


function reset () {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timeOut)
}

function countdown () {
  timeOut = setTimeout(() => {
    let seconds = Number(displaySeconds.textContent)
    let minutes = Number(displayMinutes.textContent)
    let isfinished = minutes <= 0 && seconds <= 0

    updateTimerDisplay(minutes, 0)

    if (isfinished) {
      resetControls()
      updateTimerDisplay()
      Sounds().timerEnd()

      return
    }


    if (seconds <= 0) {
     seconds = 60
      --minutes
      
    }
    
    updateTimerDisplay(minutes, String(seconds - 1))
    
  

    countdown()
  }, 1000)

 
}

function hold () {
  clearTimeout(timeOut)
}

  return {
    countdown,
    reset,
    updateTimerDisplay,
    updateMinutes,
    hold
  }


}


 