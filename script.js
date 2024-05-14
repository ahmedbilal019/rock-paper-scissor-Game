
    // generating choice from computer

    alert("Open console in your browser to play game");
    function getComputerChoice() {
        var comp_choice = ["rock", "paper", "scissor"];
        var randomIndex = Math.floor(Math.random() * comp_choice.length);
        var computer_choice = comp_choice[randomIndex]; // Store the choice in a variable
        console.log("Computer choice is: " + computer_choice); // Log the computer's choice
        return computer_choice; // Return the computer's choice
    }


 // Function to get human's choice
 function getHumanChoice() {
        let human_choice = prompt("Enter your choice in game: Rock, Paper, or Scissor").toLowerCase();
        if (human_choice == "rock" || human_choice == "paper" || human_choice == "scissor") {
            console.log("Your choice is: " + human_choice);
            return human_choice;
        } else {
            console.log("Sorry! You entered a wrong choice.");
            return null;
        }
    }


//  initilizing score
var humanScore = 0;
var computerScore = 0;
function playRound(humanSelection, computerSelection) {
        if (humanSelection === computerSelection) {
            console.log("The Games tie! \n  Play Again!");
        } else if (
            (humanSelection == "paper" && computerSelection == "rock") ||
            (humanSelection == "rock" && computerSelection == "scissor") ||
            (humanSelection == "scissor" && computerSelection == "paper")
        ) {
            console.log("You win! as : ", humanSelection , "beats", computerSelection);
            console.log("Your's score=",humanScore=  humanScore+1);
            console.log("computer's score=",computerScore= computerScore);

        }
        else if (
            (computerSelection == "paper" && humanSelection == "rock") ||
            (computerSelection == "rock" && humanSelection == "scissor") ||
            (computerSelection == "scissor" && humanSelection == "paper")
        ) {
            console.log("Computer wins! as : ", computerSelection , "beats", humanSelection);
            console.log("Your's score=",humanScore=  humanScore);
            console.log("computer's score=",computerScore= computerScore+1);
        }
        else {
            console.log("Computer wins!");
        }
    }
    let round=1;
   
    for (let round=1; round <= 5; round++) {
         console.log("---------------Round no#", round , "-----------------");
        let humanSelection = getHumanChoice();
    if (humanSelection !== null) {
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    else{
        console.log("you did not enter any choice");
    }
        
    }
    console.log("Total Result:");
    if(computerScore>humanScore){
        console.log("After 5 rounds, computer is winner of this game. Computer score is  ",computerScore );
    }
    else{
        console.log("After 5 rounds, you are the winner. your score is : ", humanScore);
    }
    
