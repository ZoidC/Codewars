// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

import { squareIt } from "./helpers/console";

function playRockPaperScissors(input1: string, input2: string) {
    const values = ["rock", "paper", "scissors"];
    const player1 = values.indexOf(input1);
    const player2 = values.indexOf(input2);
    return player1 === player2 ? "Draw!" : ((player1 + values.length - 1) % values.length === player2 ? "Player 1 won!" : "Player 2 won!");
}

squareIt("Rock");
console.log(playRockPaperScissors("rock", "rock"));
console.log(playRockPaperScissors("rock", "paper"));
console.log(playRockPaperScissors("rock", "scissors"));
squareIt("Paper");
console.log(playRockPaperScissors("paper", "rock"));
console.log(playRockPaperScissors("paper", "paper"));
console.log(playRockPaperScissors("paper", "scissors"));
squareIt("Scissors");
console.log(playRockPaperScissors("scissors", "rock"));
console.log(playRockPaperScissors("scissors", "paper"));
console.log(playRockPaperScissors("scissors", "scissors"));


