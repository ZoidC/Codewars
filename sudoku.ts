// https://www.codewars.com/kata/5296bc77afba8baa690002d7

import { getColumn, getLine, getSquare, substractContent } from "./helpers/array";
import { displayArray2D, squareIt } from "./helpers/console";
import { runTests } from "./tests";
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

// const puzzle: number[][] = [
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
// ];

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

// Tests
runTests();

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












































// ANSWER FOR CODEWARS IN JS :
//
// function sudoku(puzzle) {
//     let playing = true;
//     let currentScan = 0;
//     const maxScan = 1000;

//     while(playing && currentScan < maxScan) {
//         playing = false;
//         currentScan++;
//         for(let x = 0; x < puzzle.length; x++) {
//             for(let y = 0; y < puzzle[x].length; y++) {
//                 const validation = validate(puzzle, answers, { x, y });
//                 if (!playing && validation === 0) playing = true;
//                 if (validation != puzzle[x][y]) puzzle[x][y] = validation;
//             }
//         }
//     }

//     return puzzle;
// }

// // Constants
// const answers = [1,2,3,4,5,6,7,8,9];

// // Helpers
// const removeZeros = (array) => array.filter((element) => element !== 0);
// const substractContent = (a, b) => a.filter((element) => !b.includes(element));

// const compareArrays = (a, b) => a.length === b.length && a.every((element, index) => element === b[index]);
// const testArrayEquals = (a, b, testName) => {
//     if (!(compareArrays(a, b))) throw new Error("TEST failed : " + testName);
// }

// // Functions
// const validate = (array, values, pos) => {
//     const value = array[pos.x][pos.y];
//     if (value !== 0) return value;
//     let all = getLine(array, pos.x).concat(getColumn(array, pos.y), getSquare(array, pos));
//     all = substractContent(values, all);
//     return all.length === 1 ? all[0] : value;
// }

// const getLine = (array, x) => {
//     return removeZeros(array[x]);
// }

// const getColumn = (array, y) => {
//     const result = [];
//     for(let x = 0; x < array.length; x++) {
//         if (array[x][y] !== 0) result.push(array[x][y]);
//     }
//     return result;
// }

// const getSquare = (array, pos) => {
//     const result = [];
//     const squareSize = 3;
//     const startX = Math.floor(pos.x / squareSize) * squareSize;
//     const startY = Math.floor(pos.y / squareSize) * squareSize;
//     for(let x = startX; x < startX + squareSize; x++) {
//         for(let y = startY; y < startY + squareSize; y++) {
//             if (array[x][y] !== 0) result.push(array[x][y]);
//         }
//     }
//     return result;
// }

