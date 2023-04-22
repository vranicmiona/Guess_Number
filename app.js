// Global variable
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let attemptsLeft = 10;
// Web page element access
let buttonCheck = document.getElementById("btn-check");
let container = document.querySelector(".container");
let prikazPokusaja = document.getElementById("attempts-left");
let uneseniBroj = document.querySelector(".input");
let poruka = document.querySelector(".message");
let poruka2 = document.querySelector(".message2");
let skriveniBroj = document.querySelector(".secret-number");
let body = document.querySelector("body");
let hightScoreEl = document.querySelector(".current-high-score");
let currentScoreEl = document.querySelector(".current-score");
let novaIgra = document.querySelector(".btn-new-game");

// ADD EVENT LISTENER ON CHECK BUTTON
buttonCheck.addEventListener("click", vrednost);
function vrednost() {
  if (attemptsLeft > 10) {
    attemptsLeft--;
    prikazPoruke("You have not enetered a number&#x2755");
    // GET THE NUMBER ENTERNED BY USER
    let guess = Number(uneseniBroj.value);

    // NO INPUT
    if (guess === 0) {
      poruka.textContent = "No number or 0 is entered!";
      poruka2.textContent = "Try again!";
    }

    // GUESSED THE CORRECT NUMBER
    else if (guess === number) {
      // DISPLAY THE SECRET NUMBER
      poruka.textContent = "YOU WON THE GAME!";
      poruka2.textContent = "CONGRADULATIONS";

      // DISPLAY THE GUESS NUMBER
      skriveniBroj.textContent = number;

      // CHANGE THE BACKGROUND
      body.style.backgroundImage = url(
        "https://cf.ltkcdn.net/garden/images/orig/282403-2121x1414-violet-flower-shades.jpg"
      );

      // SET HIGH SCORE TO THE CURRENT SCORE

      highscore = score > highscore ? score : highscore;
      hightScoreEl.textContent = highscore;
    } else if (guess !== number) {
      if (score > 0) {
        body.style.backgroundColor = "red";
        setTimeout(() => {
          body.style.backgroundColor = "white";
        }, 300);
        let porukaa =
          guess > number ? "You guessed too high!" : "You guessed too low!";
        poruka.textContent = porukaa;
        score--;
        currentScoreEl.textContent = score;
      } else {
        poruka.textContent = "You LOST THE GAME";
        currentScoreEl.textContent = 0;
        body.style.backgroundColor = "red";
      }
    }
  } else {
    //LOST THE GAME
    poruka.textContent = "You LOST THE GAME";
    attemptsLeft.textContent = 0;
    body.style.backgroundColor = "red";
  }
}

novaIgra.addEventListener("click", function () {
  number = Math.trunc(Math.rendom() * 20) + 1;
  score = 20;
  attemptsLeft = 10;
  poruka.textContent = "Number between 1-20";
  currentScoreEl.textContent = score;
  prikazPokusaja.textContent = attemptsLeft;
  skriveniBroj.textContent = "?";
  uneseniBroj.value = "";
  body.style.backgroundColor = "white";
});
