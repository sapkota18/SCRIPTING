let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".message");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box clicked");
    if (turnO) {
      box.innerText = "O";
      box.setAttribute('data-player', 'O');
      turnO = false;
    } else {
      box.innerText = "X";
      box.setAttribute('data-player', 'X');
      turnO = true;
    }
    box.disabled = true;
    checkWinner();  
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, the winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const showDraw = () => {
  msg.innerText = "It's a draw!";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  let isDraw = true;  

  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
        return;  
      }
    }

    if (boxes[pattern[0]].innerText === "" || 
        boxes[pattern[1]].innerText === "" || 
        boxes[pattern[2]].innerText === "") {
      isDraw = false;
    }
  }

 
  if (isDraw) {
    showDraw();
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
