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
    let lowercaseplayerselection = playerselection.toLowerCase();
    
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
  
    
        const controller = new AbortController()
        const buttonSelection = document.querySelectorAll('button');
        
      buttonSelection.forEach((button) => button.addEventListener("click",function(e){
            const computerselection = getcomputerchoice();
            const playerselection = e.target.innerHTML;
                let verifywinner = playround(computerselection,playerselection);
                const playerScoreText = document.querySelector(".player-score");
                const computerScoreText = document.querySelector(".computer-score");
                
                const resultText = document.querySelector('.result-text');
                if (verifywinner === 2){
                    resultText.textContent = `It's a draw`;
                    computerscore ++;
                    playerscore ++;
                    computerScoreText.textContent = computerscore;
                    playerScoreText.textContent = playerscore; 
                }
                if (verifywinner === 0){
                        resultText.textContent = `You lose ${computerselection} beats ${playerselection.toLowerCase()}`;
                        computerscore++;
                        computerScoreText.textContent = computerscore ;
            
            
                }else if (verifywinner === 1){
                        resultText.textContent = `You Win ${playerselection.toLowerCase()}  beats ${computerselection} `;
                        playerscore++;
                        playerScoreText.textContent = playerscore;
                    
                    
                   
                }

                //determine winner
                if (computerscore === 5 || playerscore === 5){
                    controller.abort();
                    
                    if (computerscore > playerscore){
                        resultText.textContent = `hahahah You lose I have ${computerscore} points and you have ${playerscore} points`;
                    }

                    if (playerscore > computerscore){
                        resultText.textContent =`Oh snap You win I have ${computerscore} points and you have ${playerscore} points`;
                        return playerscore;
                        
                    }

                    if (playerscore === computerscore){
                        resultText.textContent = "It's a draw";
                        return playerscore;
                        
                    }

                }
                
            },{signal : controller.signal}));
            
            
            
            
    
        
        

}


// call game function
let playgame = game();