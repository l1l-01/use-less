"use strict";

//! Get access to web page element
let score0 = document.getElementById("score--0");
let score1 = document.getElementById("score--1");
let dice = document.querySelector(".dice");
let rollDice = document.querySelector(".btn--roll");
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");
let holdBtn = document.querySelector(".btn--hold");
let newBtn = document.querySelector(".btn--new");
let current0 = document.getElementById("current--0");
let current1 = document.getElementById("current--1");
let name0 = document.getElementById("name--0");
let name1 = document.getElementById("name--1");
let current;
let activeplayer;
let scores;

init();

function init() {
  //! initialize the score to zero
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.remove("winner-bg");
  player1.classList.remove("winner-bg");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  dice.classList.remove("hidden");
  rollDice.classList.remove("hidden");
  holdBtn.classList.remove("hidden");
  current = 0;
  activeplayer = 0;
  scores = [0, 0];
  name0.textContent = "Player 1";
  name1.textContent = "Player 2";
  //! hide the dice img
  dice.classList.add("hidden");
}

let switchPlayer = function () {
  current = 0;
  document.getElementById(`current--${activeplayer}`).textContent = current;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

//! Roll Butten event
rollDice.addEventListener("click", function () {
  //! 1.generate a random number 1 - 6
  let diceNumber = Math.trunc(Math.random() * 6) + 1;

  //! 2.display img with the random number
  dice.classList.remove("hidden");
  dice.src = `img/dice-${diceNumber}.svg`;

  //! 3.if the random number isn't 1 then add it to active players current score
  if (diceNumber != 1) {
    current += diceNumber;

    document.getElementById(`current--${activeplayer}`).textContent = current;
  }
  //! 4.if the random number is 1 then reset  current score to zero and change the active player
  else {
    switchPlayer();
  }
});

holdBtn.addEventListener("click", function () {
  //! 1.add current score to global score
  scores[activeplayer] += current;
  document.getElementById(`score--${activeplayer}`).textContent =
    scores[activeplayer];

  //! check if the plyaer already achive the maximum score
  if (scores[activeplayer] >= 100) {
    //! finich the game
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add("winner-bg");
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.remove("player--active");
    document.getElementById(`name--${activeplayer}`).textContent = "winner!";
    //! hide dice images
    dice.classList.add("hidden");
    rollDice.classList.add("hidden");
    holdBtn.classList.add("hidden");
  } else {
    switchPlayer();
  }
});

//! starting new game
newBtn.addEventListener("click", init);
