let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgbox = document.querySelector(".msg-box");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0; // For draw

const win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

//Function for reset the game
const resetGame = () => 
{
    turnO = true;
    count = 0;
    enabledBoxes();
    msgbox.classList.add("hide");
}

//Function for click event
box.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO) 
        {
            box.innerText = "O";
            box.style.color = "#ffffff";
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            box.style.color = "#c4c8cd";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner)
        {
            gameDraw();
        }
    });
});

//Function for game draw
const gameDraw = () => 
{
    msg.innerText = "Game was a Drawn.";
    msgbox.classList.remove("hide");
    disabledBoxes();
}

//Function for disable the boxes
const disabledBoxes = () =>
{
    for(let boxes of box) 
    {
        boxes.disabled = true;
    }
}

//Function for enable the boxes
const enabledBoxes = () =>
{
    for(let boxes of box) 
    {
        boxes.disabled = false;
        boxes.innerText = "";
    }
}

//Function for display the winner
const showWinner = (winner) =>
{
    msg.innerText = `Congratulation!! Winner is ${winner}.`;
    msgbox.classList.remove("hide");
    disabledBoxes();
}

//Function for check the winner
const checkWinner = () =>
{
    for(let pattern of win) 
    {
        let p1 = box[pattern[0]].innerText;
        let p2 = box[pattern[1]].innerText;
        let p3 = box[pattern[2]].innerText;

        if(p1 != "" && p2 != "" && p3 != "")
        {
            if(p1 === p2 && p2 === p3)
            {
                showWinner(p1);
                return true;
            }
        }
    }
}

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
