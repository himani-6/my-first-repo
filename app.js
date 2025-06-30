let userScore = 0;
let compScore = 0;

//accessing the choices
const choices = document.querySelectorAll(".choice");
// accessing the message from html 
const msg=document.querySelector("#print-msg");
//accessing user score
const userScoring=document.querySelector("#user-score");
//accessing computer score
const compScoring=document.querySelector("#comp-score");

//used for storing user's choice and computer's choice in a function called playGame
const playGame = (userChoice) => {
    console.log("user's choice :-", userChoice);
    const compChoice = gencompChoice();
    console.log("computer's choice :-", compChoice);

    if (userChoice === compChoice) {
        //draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper,scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;

        }
        showWin(userWin,userChoice,compChoice);
    }
};



// generating user's choice 
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });

});

//generating computer's choice
const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3); // used to generate random number between 1 to 3
    return options[random];
};

// function for draw game
const drawGame = () => {
    msg.innerText="Game was Draw , Play Again !"
     msg.style.backgroundColor="black"

};

// function for showing winner
const showWin=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoring.innerText=userScore;
        msg.innerText=`You Win !, your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScoring.innerText=compScore;
        msg.innerText=`You Lose !, ${userChoice} beats  your ${compChoice}` ;
        msg.style.backgroundColor="red";
    }
};


