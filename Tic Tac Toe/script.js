let playerO = prompt(`Enter your name Player 1 (O): -`);
let playerX = prompt(`Enter your name Player 2 (X): -`);
let currentPlayer = playerO;

let buttons = document.querySelectorAll(".box");
let reset = document.querySelector('#reset');
let newGame = document.querySelector('.new-Game');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
];

const resetGame = () => {
    currentPlayer = playerO;
    enableButtons();
    msgcontainer.classList.add('hide');
}

const NEWGAME = () => {
    let playerO = prompt(`Enter your name Player 1 (O): -`);
    let playerX = prompt(`Enter your name Player 2 (X): -`);
    currentPlayer = playerO;
    enableButtons();
    msgcontainer.classList.add('hide');
}

buttons.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box is clicked");
        if (currentPlayer === playerO) {
            box.innerText = "O";
            currentPlayer = playerX;
        } else {
            box.innerText = "X";
            currentPlayer = playerO;
        }
        box.disabled = true;

        checkWinner();
    })
});

const showWinner = (winner) => {
    if (winner === "O") {
        msg.innerText = `Congratulations! Winner is ${playerO}`;
    } else {
        msg.innerText = `Congratulations! Winner is ${playerX}`;
    }
    msgcontainer.classList.remove('hide');
    disableButtons();
}

const enableButtons = () => {
    for (let button of buttons) {
        button.disabled = false;
        button.innerText = "";
    }
}

const disableButtons = () => {
    for (let button of buttons) {
        button.disabled = true;
    }
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1value = buttons[pattern[0]].innerText;
        let pos2value = buttons[pattern[1]].innerText;
        let pos3value = buttons[pattern[2]].innerText;

        if (pos1value !== "" && pos2value !== "" && pos3value !== "") {
            if (pos1value === pos2value && pos2value === pos3value) {
                showWinner(pos1value);
            }
        }
    }
}

newGame.addEventListener('click', NEWGAME);
reset.addEventListener('click', resetGame);