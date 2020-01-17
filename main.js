document.getElementById("myButton").addEventListener("click", firstFunction);
document.getElementById("secondButton").addEventListener("click", secondFunction);
let arrayElements = document.getElementsByClassName("subflex");

function firstFunction() {
    document.getElementById("main").classList.toggle("reappear");
  }

function secondFunction() {
  let randomNumber = Math.floor(Math.random() * arrayElements.length);
  arrayElements[randomNumber].classList.toggle("image");
  arrayElements[randomNumber].classList.toggle("strikethrough");
}