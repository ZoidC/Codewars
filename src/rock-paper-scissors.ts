import { squareIt } from "./helpers/console";

export const playRockPaperScissors = (input1: string, input2: string) => {
    const values = ["rock", "paper", "scissors"];
    if (!(values.includes(input1) && values.includes(input2))) return;
    const player1 = values.indexOf(input1);
    const player2 = values.indexOf(input2);
    const result = player1 === player2 ? "Draw!" : ((player1 + values.length - 1) % values.length === player2 ? "Player 1 won!" : "Player 2 won!");
    squareIt(`Player 1 (${input1}) ║ vs ║ Player 2 (${input2}) ║ ${result}`);
    return result;
}


