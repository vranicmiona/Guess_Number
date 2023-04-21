let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(number);
let container = document.querySelector(".container");
container.addEventListener("change", runEvent);
function runEvent(e) {
  document.body.style.backgroundColor =
    "rgb(" + e.offsetX + "," + e.offsetY + ",40";
}
let buttonCheck = document.getElementById("btn");
// console.log(buttonCheck);

const prikazPoruke = function (poruka) {
  document.querySelector(".message").textContent = poruka;
};

buttonCheck.addEventListener("click", vrednost);
function vrednost() {
  let uneseniBroj = document.getElementsByClassName("input");
  uneseniBroj = Number(uneseniBroj.value);
  console.log(uneseniBroj);
  if (uneseniBroj === "") {
    prikazPoruke("You have not enetered a number&#x2755");
  } else if (uneseniBroj === number) {
    displayMessage("Number is correct&#x1F3C6");
    let body = document.getElementById(".container")[0];
    body.style.backgroundColor = "white";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (uneseniBroj !== number) {
    if (score > 1) {
      if (uneseniBroj > number) {
        displayMessage("Too high!");
      } else displayMessage("Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    displayMessage("You lost the game");
    document.querySelector(".score").textContent = 0;
  }
}

let again = document.querySelector(".btn-again");
again.addEventListener("click", ispocetka);
function ispocetka() {
  score = 20;
  displayMessage("Start game again...");
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
}

function preventRefreshOnSubmit() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}
