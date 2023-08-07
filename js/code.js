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
    //convert lowercaseplayerselection to lowercase
    let lowercaseplayerselection = playerselection.toLowerCase()
    
    //if computerselection = rock and lowercaseplayerselection = scissors
    if (computerselection === "rock" && lowercaseplayerselection === "scissors"){
        // computer wins
        return 0;

    }
        

    // if computerselection = scissors and lowercaseplayerselection = rock
    if (computerselection === "scissors" && lowercaseplayerselection === "rock"){
        // player wins
        return 1;

    }
    

    // if computerselection = rock and lowercaseplayerselection = paper
    if (computerselection === "rock" && lowercaseplayerselection === "paper"){
        // player wins
        return 1; 

    }


    // if computerselection = paper and lowercaseplayerselection = rock
    if (computerselection === "paper" && lowercaseplayerselection === "rock"){
        // computer wins
        return 0;

    }

    // if computerselection = scissors and lowercaseplayerselection = paper
    if (computerselection === "scissors" && lowercaseplayerselection === "paper"){
        // computer wins
        return 0;

    }

    // if computerselection = paper and lowercaseplayerselection = scissors
    if (computerselection === "paper" && lowercaseplayerselection === "scissors"){
        // player wins
        return 1;

    }

    // if computerselection === lowercaseplayerselection
    if (computerselection === lowercaseplayerselection){
        // draw
        return 2;

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
         //increment loop tracker by one
         count ++;
        //verify winner
        if (verifywinner === 2){
            alert(`It's a draw`)
            playerscore ++;
            computerscore ++;
        }
            if (verifywinner === 0){
                alert(`You lose ${computerselection} beats ${playerselection}`);
                //increase computer score
                computerscore ++;
    
            }else if (verifywinner === 1){
                alert(`You Win ${playerselection}  beats ${computerselection} `);
                //increase playerscore
                playerscore ++;
            
           
        }
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