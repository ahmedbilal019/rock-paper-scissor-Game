const rock = document.querySelector("#btn1");
rock.addEventListener("click", () => {
  let humanSelection = getHumanChoice(rock.value);
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

const paper = document.querySelector("#btn2");
paper.addEventListener("click", () => {
  let humanSelection = getHumanChoice(paper.value);
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

const scissor = document.querySelector("#btn3");
scissor.addEventListener("click", () => {
  let humanSelection = getHumanChoice(scissor.value);
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

function getHumanChoice(choice) {
  document.getElementById("round").innerHTML = "Round : " + roundCounter;
  if (
    choice === rock.value ||
    choice === paper.value ||
    choice === scissor.value
  ) {
    document.getElementById("human").innerHTML = "Your choice : " + choice;
    return choice;
  } else {
    console.log("Sorry! You entered a wrong choice.");
    return null;
  }
}
function getComputerChoice() {
  var comp_choice = ["rock", "paper", "scissor"];
  var randomIndex = Math.floor(Math.random() * comp_choice.length);
  var computer_choice = comp_choice[randomIndex]; // Store the choice in a variable
  document.getElementById("computer").innerHTML =
    "Computer choice: " + computer_choice;
  return computer_choice; // Return the computer's choice
}
var roundCounter = 1;
var humanScore = 0;
var computerScore = 0;

function playRound(humanSelection, computerSelection) {
  if (roundCounter >= 5) {
    document.getElementById("end").innerHTML = "Click play Again to Restart";
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

  roundCounter++;
  if (humanSelection === computerSelection) {
    document.getElementById("rule").innerHTML = "The Round tie! ";
  } else if (
    (humanSelection == "paper" && computerSelection == "rock") ||
    (humanSelection == "rock" && computerSelection == "scissor") ||
    (humanSelection == "scissor" && computerSelection == "paper")
  ) {
    document.getElementById("rule").innerHTML =
      humanSelection + " beats " + computerSelection;
    document.getElementById("humanscore").innerHTML =
      "Your's score=" + (humanScore = humanScore + 1);
    document.getElementById("computerscore").innerHTML =
      "computer's score=" + computerScore;
  } else if (
    (computerSelection == "paper" && humanSelection == "rock") ||
    (computerSelection == "rock" && humanSelection == "scissor") ||
    (computerSelection == "scissor" && humanSelection == "paper")
  ) {
    document.getElementById("rule").innerHTML =
      computerSelection + " beats " + humanSelection;
    document.getElementById("humanscore").innerHTML =
      "Your's score=" + humanScore;
    document.getElementById("computerscore").innerHTML =
      "computer's score=" + (computerScore = computerScore + 1);
  } else {
    console.log("Nothing happens");
  }
}
