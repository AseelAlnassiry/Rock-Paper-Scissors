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
      return "Tie! Both chose Rock";
    } else if (computerSelection === choices[1]) {
      return "You Lose! Paper beats Rock";
    } else {
      return "You Win! Rock beats Scissor";
    }
  }

  if (playerSelection === choices[1]) {
    if (computerSelection === choices[0]) {
      return "You Win! Rock beats Paper";
    } else if (computerSelection === choices[1]) {
      return "Tie! Both chose Paper";
    } else {
      return "You Lose! Scissor beats Paper";
    }
  }

  if (playerSelection === choices[2]) {
    if (computerSelection === choices[0]) {
      return "You Lose! Rock beats Scissor";
    } else if (computerSelection === choices[1]) {
      return "You Win! Scissor beats Paper";
    } else {
      return "Tie! Both chose Scissor";
    }
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    let playerPlay = prompt("Rock, Paper or Scissor?");
    let outcome = playRound(playerPlay, computerPlay());
    console.log(outcome);
  }
}

game();
