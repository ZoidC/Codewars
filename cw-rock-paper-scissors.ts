import { squareIt } from "./src/helpers/console";
import { runTests } from "./src/tests";
import { playRockPaperScissors } from "./src/rock-paper-scissors";

const kata = "Rock Paper Scissors";

runTests(kata);

squareIt(kata, 2);
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f
playRockPaperScissors("rock", "rock");
playRockPaperScissors("rock", "paper");
playRockPaperScissors("rock", "scissors");
playRockPaperScissors("rock", "zoidc");
