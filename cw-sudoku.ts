import { squareIt } from "./src/helpers/console";
import { runTests } from "./src/tests";
import { sudoku } from "./src/sudoku";

const kata = "Sudoku";

runTests(kata);

squareIt(kata, 2);
// https://www.codewars.com/kata/5296bc77afba8baa690002d7
const puzzle: number[][] = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];
// const impossiblePuzzle: number[][] = [
//     [0,0,0,0,0,0,0,0,0],
//     [6,0,0,1,9,5,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [8,0,0,0,6,0,0,0,3],
//     [0,0,0,0,0,0,0,0,0],
//     [7,0,0,0,2,0,0,0,6],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,4,1,9,0,0,5],
//     [0,0,0,0,0,0,0,0,0]
// ];
sudoku(puzzle);
