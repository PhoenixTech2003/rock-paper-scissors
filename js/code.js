function getcomputerchoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 1) {
        return "rock";
    }else if (choice === 2){
        return "scissors";
    }else {
        return "paper";
    }
}

function playround(computerselection, playerselection){
    //convert lowercaseplayerdelection to lowercase
    let lowercaseplayerdelection = playerselection.toLowerCase()
    //if computerselection = rock and lowercaseplayerdelection = scissors
    if (computerselection === "rock" && lowercaseplayerdelection === "scissors"){
        // computer wins
        return `You lose ${computerselection} beats ${lowercaseplayerdelection}`;

    }
        

    // if computerselection = scissors and lowercaseplayerdelection = rock
    if (computerselection === "scissors" && lowercaseplayerdelection === "rock"){
        // player wins
        return `You win ${lowercaseplayerdelection} beats ${computerselection}`;

    }

    // if computerselection = rock and lowercaseplayerdelection = paper
    if (computerselection === "rock" && lowercaseplayerdelection === "paper"){
        // player wins
        return `You win ${lowercaseplayerdelection} beats ${computerselection}`; 

    }


    // if computerselection = paper and lowercaseplayerdelection = rock
    if (computerselection === "paper" && lowercaseplayerdelection === "rock"){
        // computer wins
        return `You lose ${computerselection} beats ${lowercaseplayerdelection}`;

    }

    // if computerselection = scissors and lowercaseplayerdelection = paper
    if (computerselection === "scissors" && lowercaseplayerdelection === "paper"){
        // computer wins
        return `You lose ${computerselection} beats ${lowercaseplayerdelection}`;

    }

    // if computerselection = paper and lowercaseplayerdelection = scissors
    if (computerselection === "paper" && lowercaseplayerdelection === "scissors"){
        // player wins
        return `You win ${lowercaseplayerdelection} beats ${computerselection}`;

    }

    // if computerselection === lowercaseplayerdelection
    if (computerselection === lowercaseplayerdelection){
        // draw
        return "Draw";

    }
}

const computerselection = getcomputerchoice();

const playerselection = "rock";

result = playround(computerselection,playerselection)
console.log(result)