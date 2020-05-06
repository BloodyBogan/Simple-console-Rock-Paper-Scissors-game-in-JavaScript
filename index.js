console.log("1 - Rock\n2 - Paper\n3 - Scissors\n4 - Reset the score\n5 - Exit the game\n");

const options = [1, 2, 3, 4, 5];

let userScore = 0;
let pcScore = 0;

while (true) {
  let user;
  while (true) {
    user = prompt("Enter your choice: ");

    if(options.indexOf(parseInt(user)) === -1)
      console.log("Incorrect input! Try again..");
    else
      break;
  }

  if (user == 4) {
    userScore = 0;
    pcScore = 0;
    console.log("Score reseted!");
    continue;
  }

  if (user == 5)
    break;

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const pc = getRandomInt(3);

  const availableChoices = ["rock", "paper", "scissors"];

  console.log("\nYou chose " + availableChoices[user - 1] + "\nComputer chose " + availableChoices[pc]);

  const outcomes = {
    win: [13, 21, 32],
    draw: [11, 22, 33],
    lose: [12, 23, 31]
  }

  const outcome = user + (pc + 1);

  let i = 0;

  while (true) {
    if (outcome == outcomes.win[i]) {
      userScore++;
      console.log(`\nYou win!\nYou - ${userScore} | PC - ${pcScore}\n\n----------------\n`);
      break;
    }
    if (outcome == outcomes.draw[i]) {
      console.log(`\nIt is a draw!\nYou - ${userScore} | PC - ${pcScore}\n\n----------------\n`);
      break;
    }
    if (outcome == outcomes.lose[i]) {
      pcScore++;
      console.log(`\nYou lose!\nYou - ${userScore} | PC - ${pcScore}\n\n----------------\n`);
      break;
    }
    i++;
  }
}

