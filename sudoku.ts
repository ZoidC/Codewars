// https://www.codewars.com/kata/5296bc77afba8baa690002d7

import { getColumn, getLine, getSquare, substractContent } from "./helpers/array";
import { displayArray2D, squareIt } from "./helpers/console";
import { Position } from "./types/Position";

// Constants
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

const answers = [1,2,3,4,5,6,7,8,9];
const maxScan = 100;

// Functions
const validate = (array: number[][], values: number[], pos: Position): number => {
    const value = array[pos.x][pos.y];
    if (value !== 0) return value;
    let all = getLine(array, pos.x).concat(getColumn(array, pos.y), getSquare(array, pos));
    all = substractContent(values, all);
    if (all.length === 1) console.log("Found :", pos, ":", all[0]);
    return all.length === 1 ? all[0] : value;
}

// Game
squareIt("Game");
displayArray2D(puzzle);

let playing = true;
let currentScan = 0;

while(playing && currentScan < maxScan) {
    playing = false;
    currentScan++;
    console.log("Scan:", currentScan);
    for(let x = 0; x < puzzle.length; x++) {
        for(let y = 0; y < puzzle[x].length; y++) {
            const validation = validate(puzzle, answers, { x, y });
            if (!playing && validation === 0) playing = true;
            if (validation != puzzle[x][y]) puzzle[x][y] = validation;
        }
    }
    displayArray2D(puzzle);
}

if (currentScan >= maxScan) {
    console.log("✖ Could not resolve the Sudoku!");
} else {
    console.log("✔ Sudoku solved!");
}
