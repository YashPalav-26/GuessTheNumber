"use strict";
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

const dispMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guessedValue = Number(document.querySelector(".guess").value);
  console.log(guessedValue);

  //Execute When user doesn't enter any number !!
  if (!guessedValue) {
    dispMessage("⛔ No Number!");
  }

  //Executes When Player wins !!
  else if (guessedValue === secretNumber) {
    dispMessage("🎉 You Guessed it Right!");
    document.querySelector("body").style.background =
      "linear-gradient(to right top,rgb(11, 190, 80), #0AA844)";

    document.querySelector("h1").style.color = "#fff";
    document.querySelector(".between").style.color = "#fff";
    document.querySelector(".message").style.color = "#fff";
    document.querySelector(".label-score").style.color = "#fff";
    document.querySelector(".label-highscore").style.color = "#fff";
    document.querySelector(".score").style.color = "#fff";
    document.querySelector(".highscore").style.color = "#fff";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //Executes when he guesses wrong !!
  else if (guessedValue !== secretNumber) {
    if (score > 1) {
      dispMessage(guessedValue > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      dispMessage("🤡 You Lost the Game!");
      score--;
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector("body").style.background =
    "linear-gradient(135deg, #141e30, #243b55)";
  document.querySelector("h1").style.color = "#00d4ff";
  document.querySelector(".between").style.color = "#00d4ff";
  document.querySelector(".message").style.color = "#00d4ff";
  document.querySelector(".label-score").style.color = "#00d4ff";
  document.querySelector(".label-highscore").style.color = "#00d4ff";
  document.querySelector(".score").style.color = "#00ff7f";
  document.querySelector(".highscore").style.color = "#00ff7f";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  dispMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
