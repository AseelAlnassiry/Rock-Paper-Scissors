let choices = ["Rock", "Paper", "Scissor"];

function computerPlay() {
  let randNum = Math.floor(Math.random() * choices.length);
  return choices[randNum];
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

  if (playerSelection === choices[0]) {
    if (computerSelection === choices[0]) {
      return ["Tie! Both chose Rock", 0];
    } else if (computerSelection === choices[1]) {
      return ["You Lose! Paper beats Rock", -1];
    } else {
      return ["You Win! Rock beats Scissor", 1];
    }
  }

  if (playerSelection === choices[1]) {
    if (computerSelection === choices[0]) {
      return ["You Win! Rock beats Paper", 1];
    } else if (computerSelection === choices[1]) {
      return ["Tie! Both chose Paper", 0];
    } else {
      return ["You Lose! Scissor beats Paper", -1];
    }
  }

  if (playerSelection === choices[2]) {
    if (computerSelection === choices[0]) {
      return ["You Lose! Rock beats Scissor", -1];
    } else if (computerSelection === choices[1]) {
      return ["You Win! Scissor beats Paper", 1];
    } else {
      return ["Tie! Both chose Scissor", 0];
    }
  }
}

function game() {
  let playerPlay = prompt("Rock, Paper or Scissor?");
  let outcome = playRound(playerPlay, computerPlay());
  console.log(outcome);
}

let btn = document.querySelectorAll("button");

let round = document.querySelector("#counter");
let roundCounter = round.textContent[round.textContent.length - 1];
console.log(roundCounter);

let announcementBoard = document.querySelector("#announcement");

let internalCounter = 0;

btn.forEach((button) => {
  button.addEventListener("click", () => {
    if (roundCounter > 0) {
      const currentRound = playRound(button.textContent, computerPlay());
      announcementBoard.textContent = currentRound[0];
      internalCounter = internalCounter + currentRound[1];
      roundCounter--;
      round.textContent =
        round.textContent.slice(0, 8) + roundCounter.toString();
    } else {
      round.textContent = " Rounds: 5";
      roundCounter = round.textContent[round.textContent.length - 1];
    }
  });
});
