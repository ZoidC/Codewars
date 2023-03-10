import { squareIt } from "./src/helpers/console";
import { runTests } from "./src/tests";
import { playRockPaperScissors } from "./src/rock-paper-scissors";

// • https://www.codewars.com/kata/5672a98bdbdd995fad00000f
const kata = "Rock Paper Scissors";

runTests(null, false).then(() => {
    squareIt(kata, 2);

    // playRockPaperScissors("rock", "rock");
    // playRockPaperScissors("rock", "paper");
    playRockPaperScissors("rock", "scissors");
    // playRockPaperScissors("rock", "zoidc");
}).catch((e) => console.log(e));
