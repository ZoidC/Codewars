import { Position } from "../types/Position";

export const removeDuplicates = <T>(array: T[]) => array.filter((element, index) => array.indexOf(element) === index);
export const removeZeros = (array: number[]) => array.filter((element) => element !== 0);
export const substractContent = <T>(a: T[], b: T[]) => a.filter((element) => !b.includes(element));

// Tests
const compareArrays = <T>(a: T[], b: T[]) => a.length === b.length && a.every((element, index) => element === b[index]);
export const testArrayEquals = <T>(a: T[], b: T[], testName: string) => {
    if (!(compareArrays(a, b))) throw new Error("TEST failed : " + testName);
}

// Sudokus
export const getLine = (array: number[][], x: number) => {
    return removeZeros(array[x]);
}

export const getColumn = (array: number[][], y: number) => {
    const result: number[] = [];
    for(let x = 0; x < array.length; x++) {
        if (array[x][y] !== 0) result.push(array[x][y]);
    }
    return result;
}

export const getSquare = (array: number[][], pos: Position) => {
    // if 0 0
    // if 1 0
    // if 2 0
    // if 3 3
    // if 4 3
    // if 5 3
    // if 6 6
    // if 7 6
    // if 8 6
    const result: number[] = [];
    const squareSize = 3;
    const startX = Math.floor(pos.x / squareSize) * squareSize;
    const startY = Math.floor(pos.y / squareSize) * squareSize;
    for(let x = startX; x < startX + squareSize; x++) {
        for(let y = startY; y < startY + squareSize; y++) {
            if (array[x][y] !== 0) result.push(array[x][y]);
        }
    }
    return result;
}
