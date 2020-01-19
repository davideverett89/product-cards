// document.getElementById("myButton").addEventListener("click", firstFunction);
// function firstFunction() {
//     document.getElementById("main").classList.toggle("reappear");
//   }

document.getElementById("secondButton").addEventListener("click", randomizer);
function randomizer() {
  let arrayElements = document.getElementsByClassName("subflex");
  let randomNumber = Math.floor(Math.random() * arrayElements.length);
  arrayElements[randomNumber].classList.toggle("image");
  arrayElements[randomNumber].classList.toggle("strikethrough");
}