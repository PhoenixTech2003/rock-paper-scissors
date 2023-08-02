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

console.log(getcomputerchoice())