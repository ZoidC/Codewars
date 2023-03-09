// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

function playRockPaperScissors(input1: string, input2: string) {
    const values = ["rock", "paper", "scissors"];
    const player1 = values.indexOf(input1);
    const player2 = values.indexOf(input2);
    return player1 === player2 ? "Draw!" : ((player1 + values.length - 1) % values.length === player2 ? "Player 1 won!" : "Player 2 won!");
}

//  rock    paper   scissors
//  0       1       2

// win
// (rock + 2)%2 = scissors
// (paper + 2)%3 = rock
// (scissors + 2)%3 = paper

// draw
// +0

// lose
// +1

console.log(playRockPaperScissors("rock", "rock"));
console.log(playRockPaperScissors("rock", "paper"));
console.log(playRockPaperScissors("rock", "scissors"));

console.log(playRockPaperScissors("paper", "rock"));
console.log(playRockPaperScissors("paper", "paper"));
console.log(playRockPaperScissors("paper", "scissors"));

console.log(playRockPaperScissors("scissors", "rock"));
console.log(playRockPaperScissors("scissors", "paper"));
console.log(playRockPaperScissors("scissors", "scissors"));


