function getcomputerchoice() {
    // generate random number
    let choice = Math.floor(Math.random() * 3);
    // if choice is 1 pick rock
    if (choice === 1) {
        return "rock";
    // if choice is 2 pick scissors
    }else if (choice === 2){
        return "scissors";
    //if choce is anything else between 0 and 3 but not 1 or 2 pick paper
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
        return 1;

    }

    // if computerselection = rock and lowercaseplayerdelection = paper
    if (computerselection === "rock" && lowercaseplayerdelection === "paper"){
        // player wins
        return 1; 

    }


    // if computerselection = paper and lowercaseplayerdelection = rock
    if (computerselection === "paper" && lowercaseplayerdelection === "rock"){
        // computer wins
        return 0;

    }

    // if computerselection = scissors and lowercaseplayerdelection = paper
    if (computerselection === "scissors" && lowercaseplayerdelection === "paper"){
        // computer wins
        return 0;

    }

    // if computerselection = paper and lowercaseplayerdelection = scissors
    if (computerselection === "paper" && lowercaseplayerdelection === "scissors"){
        // player wins
        return 1;

    }

    // if computerselection === lowercaseplayerdelection
    if (computerselection === lowercaseplayerdelection){
        // draw
        return "Draw";

    }
}


function game (){
    //create variable for computer score and player score
    let computerscore = 0;
    let playerscore = 0;
    //create loop trackerr
    let count = 0;
  //create loop that plays for four rounds
    while (count <= 4){
        //call computer choice function
        const computerselection = getcomputerchoice();
        //prompt for user input
        const playerselection = prompt("rock, paper, scissors?");

        //varible keeping  winner
        let verifywinner = playround(computerselection,playerselection);
        //verify winner
        if (verifywinner === 0){
            alert(`You lose ${computerselection} beats ${playerselection}`);
            //increase computer score
            computerscore ++;

        }else if (verifywinner === 1){
            alert(`You Win ${computerselection} beats ${playerselection}`);
            //increase playerscore
            playerscore ++;
        }else{
            alert(`It's a draw`)
            playerscore ++;
            computerscore ++;
        }
        
        //increment loop tracker by one
        count ++;
    }

    //determine winner
    if (computerscore > playerscore){
        alert(`hahahah You lose I have ${computerscore} points and you have ${playerscore} points`);
    }

    if (playerscore > computerscore){
        alert(`Oh snap You win I have ${computerscore} points and you have ${playerscore} points`);
    }

    if (playerscore === computerscore){
        alert("It's a draw");
    }
}


// call game function
let playgame = game();