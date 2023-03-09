// https://www.codewars.com/kata/5296bc77afba8baa690002d7

import { getColumn, getLine, removeZeros, substractContent } from "./helpers/array";
import { displayArray2D, squareIt } from "./helpers/console";
import { Position } from "./types/Position";

// Specific functions
export const validate = (array: number[][], values: number[], pos: Position): number => {
    const value = array[pos.x][pos.y];
    if (value !== 0) return value;
    let all = getLine(array, pos.x).concat(getColumn(array, pos.y), getSquare(array, pos));
    all = removeZeros(all);
    all = substractContent(values, all);
    // if (all.length === 1) console.log("Found :", pos, ":", all[0]);
    return all.length === 1 ? all[0] : value;
}

export const getSquare = (array: number[][], pos: Position) => {
    const result: number[] = [];
    const squareSize = 3;
    const startX = Math.floor(pos.x / squareSize) * squareSize;
    const startY = Math.floor(pos.y / squareSize) * squareSize;
    for(let x = startX; x < startX + squareSize; x++) {
        for(let y = startY; y < startY + squareSize; y++) {
            result.push(array[x][y]);
        }
    }
    return result;
}

export const sudoku = (puzzle: number[][]) => {
    // Constants
    const answers = [1,2,3,4,5,6,7,8,9];
    const maxScan = 100;

    // Game
    let playing = true;
    let currentScan = 0;

    while(playing && currentScan < maxScan) {
        playing = false;
        currentScan++;
        console.log("Scan:", currentScan);
        displayArray2D(puzzle);
        for(let x = 0; x < puzzle.length; x++) {
            for(let y = 0; y < puzzle[x].length; y++) {
                const validation = validate(puzzle, answers, { x, y });
                if (!playing && validation === 0) playing = true;
                if (validation != puzzle[x][y]) puzzle[x][y] = validation;
            }
        }
    }

    squareIt(displayArray2D(puzzle, false));

    if (currentScan >= maxScan) {
        squareIt("✖ ║ Could not resolve the Sudoku!");
    } else {
        squareIt("✔ ║ Sudoku solved!");
    }
}
