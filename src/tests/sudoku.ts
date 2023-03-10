import { arrayEquals, equals } from "../helpers/test";
import { getSquare, validate } from "../sudoku";

const tests = () => {
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

    currentTest = "getSquare";
    arrayEquals([5,3,0,6,0,0,0,9,8], getSquare(puzzle, { x: 0, y: 0 }), currentTest);
    arrayEquals([2,8,0,0,0,5,0,7,9], getSquare(puzzle, { x: puzzle.length - 1, y: puzzle.length - 1 }), currentTest);
    arrayEquals([0,6,0,0,0,0,0,0,0], getSquare(puzzle, { x: puzzle.length - 1, y: 0 }), currentTest);
    arrayEquals([0,0,0,0,0,0,0,6,0], getSquare(puzzle, { x: 0, y: puzzle.length - 1 }), currentTest);
    arrayEquals([0,6,0,8,0,3,0,2,0], getSquare(puzzle, { x: 4, y: 4 }), currentTest);
    console.log('✔', currentTest);

    currentTest = "validate";
    equals(puzzle[0][0], validate(puzzle, [1,2,3,4,5,6,7,8,9], { x: 0, y: 0 }), currentTest);
    equals(5, validate(puzzle, [1,2,3,4,5,6,7,8,9], { x: 4, y: 4 }), currentTest);
    equals(7, validate(puzzle, [1,2,3,4,5,6,7,8,9], { x: 6, y: 5 }), currentTest);
    equals(4, validate(puzzle, [1,2,3,4,5,6,7,8,9], { x: 6, y: 8 }), currentTest);
    equals(3, validate(puzzle, [1,2,3,4,5,6,7,8,9], { x: 7, y: 7 }), currentTest);
    console.log('✔', currentTest);
}

export default tests;
