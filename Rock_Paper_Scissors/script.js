let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const computerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game Draw!";
  msg.style.backgroundColor = "blue"; 
};

const showWinner = (userwin, userchoice, compChoice) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    console.log("User Win");
    msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green"; 
  } else {
    compscore++;
    console.log("Computer Win");
    compscorepara.innerText = compscore;
    msg.innerText = `Computer wins! ${compChoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";  
  }
  checkGameOver();
};

const playGame = (userchoice) => {
  console.log("user choice = ", userchoice);
  const compChoice = computerChoice();
  console.log("comp choice = ", compChoice);
  let userwin = true;

  if (userchoice === compChoice) {
    drawGame();
    return;
  }

  if (userchoice === "rock") {
    userwin = compChoice !== "paper";
  } else if (userchoice === "paper") {
    userwin = compChoice !== "scissors";
  } else {
    userwin = compChoice !== "rock";
  }

  showWinner(userwin, userchoice, compChoice);
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});

const resetButton = document.querySelector("#reset");

const resetGame = () => {
  userscore = 0;
  compscore = 0;
  userscorepara.innerText = userscore;
  compscorepara.innerText = compscore;
  msg.innerText ="Game Reset. Start Playing!";
  msg.style.backgroundColor = "black";
};
resetButton.addEventListener("click", resetGame);


const checkGameOver = () => {
    if (userscore === 10 || compscore === 10) {
        const finalWinner = userscore === 10 ? "User" : "Computer";
        msg.innerText = `${finalWinner} wins the game! Game Over. Starting a new game...`;
        msg.style.backgroundColor = "purple";
        setTimeout(resetGame, 2000); 
    }
};

