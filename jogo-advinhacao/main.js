const screen1 = document.querySelector(".screen1")
const screen2= document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

// eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', keyEvent)

//funções
function handleTryClick(event) {
  event.preventDefault(); 
  const inputNumber = document.querySelector("#number")
  
  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || inputNumber.value == "") {
     alert("Digite um numero válido!")
     return inputNumber.value = "";
  } 
  
  if (Number(inputNumber.value) == randomNumber) {
    
    toggleScreen()
    screen2.querySelector("h2").innerText = `Você acertou em ${attempts} tentativas!` 
  }
  inputNumber.value = ""
  attempts++
}

function handleResetClick() {

  toggleScreen()
  attempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen () {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function keyEvent (e) {
  if (e.key == 'Enter' && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}
