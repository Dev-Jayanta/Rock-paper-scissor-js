let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was draw");
      msg.innerText = "Game Was Draw Play Again"; 
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!. ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
         compScore++;
        compScorePara.innerText = compScore;
         msg.innerText = `You Lose. ${compChoice} besats yours ${userChoice}`;
          msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);
    const compChoice = genComputerChoice();
     console.log("Comp Choice =", compChoice);

     if (userChoice === compChoice) {
        drawGame();
     } else {
        let userWin = true;
        if(userChoice === "rock") {
            //paper , scissors
           userWin = compChoice === "paper" ? false : true;           
        } else if(userChoice = "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
     }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
         const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});