let btn = document.querySelectorAll(".btns");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let winner = document.querySelector(".winner");
let newGame = document.querySelector(".new-game");

let turn_O = true; //PlayerX, Player0
let count = 0;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn_O = true;
    count = 0;
    winner.classList.add("hide");
    enableBoxes();

}


//Writing "X" or "O" 
btn.forEach((btns) =>{
    btns.addEventListener("click", () => {
            if (turn_O){ //Player O
                btns.innerText="O";
                turn_O = false;
            }
            else{ //Player X
                btns.innerText="X";
                turn_O = true;
            }
            btns.disabled = true;
            count++;
        let isWinner = checkWinner();
            if (count == 9 && !isWinner){
                msg.innerText = "Game was A Draw!!!";
                winner.classList.remove("hide");

            }
    });
});


const disableBoxes = () => {
    for (let btns of btn ){
        btns.disabled = true;
    }
};

const enableBoxes = () => {
    for (let btns of btn ){
        btns.disabled = false;
        btns.innerText = "";
    }
};


const showWinner = (ourWinner) => {
    msg.innerText = `Our Winner is ${ourWinner}`;
    winner.classList.remove("hide");
    disableBoxes();
};

//Check Winner
const checkWinner = () => {
for (let pattern of winPattern){
    let posValue0 = btn[pattern[0]].innerText;
    let posValue1 = btn[pattern[1]].innerText;
    let posValue2 = btn[pattern[2]].innerText;

    if (posValue0 != "" && posValue1 != "" && posValue1 != ""){
        if (posValue0 == posValue1 && posValue1 == posValue2){
            showWinner(posValue0);
        }
    }
}
}

newGame.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)