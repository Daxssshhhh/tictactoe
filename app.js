let boxes  = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbut");
let newbutton = document.querySelector("#newbut");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]; 

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
    box.disabled = true;
    checkWinner();
    });
});
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
};


const disbaleboxes = () => {
   for (let box of boxes){
        box.disabled = true;
   }
};


const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disbaleboxes();
};
const checkWinner = () => {
        for ( let pattern of winningCombos){

             let pos1 = boxes[pattern[0]].innerText;
             let pos2 = boxes[pattern[1]].innerText;
             let pos3 = boxes[pattern[2]].innerText;

             if(pos1 != "" && pos2 != "" && pos3 != ""){
                if (pos1 === pos2 && pos2 === pos3){
                    console.log("Winner!",pos1);
                    showWinner(pos1);
                  }
                }
            }
    };

newbut.addEventListener("click", resetGame);
resetbut.addEventListener("click", resetGame);