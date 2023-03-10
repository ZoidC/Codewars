import { squareIt } from "../helpers/console";
import { compareArrays, getColumn, getRow, removeDuplicates, removeZeros, substractContent } from "../helpers/array";
import { getSquare as getSudokuSquare, validate as validateSudoku } from "../sudoku";

// Tests
const testEquals = <T>(a: T, b: T, testName: string) => {
    if (Array.isArray(a)) throw new Error(`Could not test ${testName}(), use testArrayEquals() instead!`);
    if (a !== b) throw new Error(`TEST failed : ${testName}()`);
}

const testArrayEquals = <T>(a: T[], b: T[], testName: string) => {
    if (!(compareArrays(a, b))) throw new Error(`TEST failed : ${testName}()`);
}

export const runTests = (name: string) => {
    squareIt("Tests");

    let currentTest = "";
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

    currentTest = "getColumn";
    testArrayEquals([5,6,0,8,4,7,0,0,0], getColumn(puzzle, 0), currentTest);
    testArrayEquals([7,9,0,6,0,2,0,1,8], getColumn(puzzle, 4), currentTest);
    testArrayEquals([0,0,0,3,1,6,0,5,9], getColumn(puzzle, 8), currentTest);
    console.log('✔', currentTest);

    currentTest = "getRow";
    testArrayEquals([5,3,0,0,7,0,0,0,0], getRow(puzzle, 0), currentTest);
    testArrayEquals([4,0,0,8,0,3,0,0,1], getRow(puzzle, 4), currentTest);
    testArrayEquals([0,0,0,0,8,0,0,7,9], getRow(puzzle, 8), currentTest);
    console.log('✔', currentTest);

    currentTest = "removeDuplicates";
    testArrayEquals([0,1,2,3,4,5,6,7,8,9], removeDuplicates([0,1,2,3,4,5,6,7,8,9,9]), currentTest);
    testArrayEquals([0,1,2,3,4,5,6,7,8,9], removeDuplicates([0,0,1,2,3,4,5,6,7,8,9]), currentTest);
    testArrayEquals([0,1,2,3,4,5,6,7,8,9], removeDuplicates([0,1,2,3,4,5,5,6,7,8,9]), currentTest);
    testArrayEquals([0,1,2,3,4,5,6,7,8,9], removeDuplicates([0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,9]), currentTest);
    console.log('✔', currentTest);

    currentTest = "removeZeros";
    testArrayEquals([], removeZeros([]), currentTest);
    testArrayEquals([], removeZeros([0]), currentTest);
    testArrayEquals([1,2,3,4,5,6,7,8,9], removeZeros([0,1,2,3,4,5,6,7,8,9]), currentTest);
    testArrayEquals([9,8,7,6,5,4,3,2,1], removeZeros([9,8,7,6,5,4,3,2,1,0,0]), currentTest);
    console.log('✔', currentTest);

    currentTest = "substractContent";
    testArrayEquals([0,1,2,3,4,5,6,7,8,9], substractContent([0,1,2,3,4,5,6,7,8,9], []), currentTest);
    testArrayEquals([9,8,7,6,5,3,1,0], substractContent([9,8,7,6,5,4,3,2,1,0], [4,2]), currentTest);
    testArrayEquals([], substractContent([0,1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1,0]), currentTest);
    console.log('✔', currentTest);

    if(name === "Sudoku") {
        currentTest = "getSquare";
        testArrayEquals([5,3,0,6,0,0,0,9,8], getSudokuSquare(puzzle, { x: 0, y: 0 }), currentTest);
        testArrayEquals([2,8,0,0,0,5,0,7,9], getSudokuSquare(puzzle, { x: puzzle.length - 1, y: puzzle.length - 1 }), currentTest);
        testArrayEquals([0,6,0,0,0,0,0,0,0], getSudokuSquare(puzzle, { x: puzzle.length - 1, y: 0 }), currentTest);
        testArrayEquals([0,0,0,0,0,0,0,6,0], getSudokuSquare(puzzle, { x: 0, y: puzzle.length - 1 }), currentTest);
        testArrayEquals([0,6,0,8,0,3,0,2,0], getSudokuSquare(puzzle, { x: 4, y: 4 }), currentTest);
        console.log('✔', currentTest);

        currentTest = "validate";
        testEquals(puzzle[0][0], validateSudoku(puzzle, [1,2,3,4,5,6,7,8,9], { x: 0, y: 0 }), currentTest);
        testEquals(5, validateSudoku(puzzle, [1,2,3,4,5,6,7,8,9], { x: 4, y: 4 }), currentTest);
        testEquals(7, validateSudoku(puzzle, [1,2,3,4,5,6,7,8,9], { x: 6, y: 5 }), currentTest);
        testEquals(4, validateSudoku(puzzle, [1,2,3,4,5,6,7,8,9], { x: 6, y: 8 }), currentTest);
        testEquals(3, validateSudoku(puzzle, [1,2,3,4,5,6,7,8,9], { x: 7, y: 7 }), currentTest);
        console.log('✔', currentTest);
    }
}
