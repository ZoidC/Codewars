import { getColumn, getLine, getSquare, removeDuplicates, removeZeros, substractContent, testArrayEquals } from "./helpers/array";
import { squareIt } from "./helpers/console";

export const runTests = () => {
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

    currentTest = "getLine";
    testArrayEquals([5,3,7], getLine(puzzle, 0), currentTest);
    testArrayEquals([4,8,3,1], getLine(puzzle, 4), currentTest);
    testArrayEquals([8,7,9], getLine(puzzle, 8), currentTest);
    console.log('✔', currentTest);

    currentTest = "getColumn";
    testArrayEquals([5,6,8,4,7], getColumn(puzzle, 0), currentTest);
    testArrayEquals([7,9,6,2,1,8], getColumn(puzzle, 4), currentTest);
    testArrayEquals([3,1,6,5,9], getColumn(puzzle, 8), currentTest);
    console.log('✔', currentTest);

    currentTest = "getSquare";
    testArrayEquals([5,3,6,9,8], getSquare(puzzle, { x: 0, y: 0 }), currentTest);
    testArrayEquals([2,8,5,7,9], getSquare(puzzle, { x: puzzle.length - 1, y: puzzle.length - 1 }), currentTest);
    testArrayEquals([6], getSquare(puzzle, { x: puzzle.length - 1, y: 0 }), currentTest);
    testArrayEquals([6], getSquare(puzzle, { x: 0, y: puzzle.length - 1 }), currentTest);
    testArrayEquals([6,8,3,2], getSquare(puzzle, { x: 4, y: 4 }), currentTest);
    console.log('✔', currentTest);
}

runTests();
