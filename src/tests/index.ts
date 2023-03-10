import { squareIt } from "../helpers/console";
import { getColumn, getRow, removeDuplicates, removeZeros, substractContent } from "../helpers/array";
import { arrayEquals, equals } from "../helpers/test";
import { slugify } from "../helpers/string";

export const runTests = async (name: string|null, doGlobal = true) => {
    if (doGlobal || name) squareIt("Tests");

    if (doGlobal) {
        let currentTest = "";
        const array: number[][] = [
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
        arrayEquals([5,6,0,8,4,7,0,0,0], getColumn(array, 0), currentTest);
        arrayEquals([7,9,0,6,0,2,0,1,8], getColumn(array, 4), currentTest);
        arrayEquals([0,0,0,3,1,6,0,5,9], getColumn(array, 8), currentTest);
        console.log('✔', currentTest);

        currentTest = "getRow";
        arrayEquals([5,3,0,0,7,0,0,0,0], getRow(array, 0), currentTest);
        arrayEquals([4,0,0,8,0,3,0,0,1], getRow(array, 4), currentTest);
        arrayEquals([0,0,0,0,8,0,0,7,9], getRow(array, 8), currentTest);
        console.log('✔', currentTest);

        currentTest = "removeDuplicates";
        arrayEquals([0,1,2,3,4,5,6,7,8,9], removeDuplicates([0,1,2,3,4,5,6,7,8,9,9]), currentTest);
        arrayEquals([0,1,2,3,4,5,6,7,8,9], removeDuplicates([0,0,1,2,3,4,5,6,7,8,9]), currentTest);
        arrayEquals([0,1,2,3,4,5,6,7,8,9], removeDuplicates([0,1,2,3,4,5,5,6,7,8,9]), currentTest);
        arrayEquals([0,1,2,3,4,5,6,7,8,9], removeDuplicates([0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,9]), currentTest);
        console.log('✔', currentTest);

        currentTest = "removeZeros";
        arrayEquals([], removeZeros([]), currentTest);
        arrayEquals([], removeZeros([0]), currentTest);
        arrayEquals([1,2,3,4,5,6,7,8,9], removeZeros([0,1,2,3,4,5,6,7,8,9]), currentTest);
        arrayEquals([9,8,7,6,5,4,3,2,1], removeZeros([9,8,7,6,5,4,3,2,1,0,0]), currentTest);
        console.log('✔', currentTest);

        currentTest = "slugify";
        equals("rock-paper-scissors", slugify("Rock Paper Scissors"), currentTest);
        equals("sudoku", slugify("Sudoku"), currentTest);
        console.log('✔', currentTest);

        currentTest = "substractContent";
        arrayEquals([0,1,2,3,4,5,6,7,8,9], substractContent([0,1,2,3,4,5,6,7,8,9], []), currentTest);
        arrayEquals([9,8,7,6,5,3,1,0], substractContent([9,8,7,6,5,4,3,2,1,0], [4,2]), currentTest);
        arrayEquals([], substractContent([0,1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1,0]), currentTest);
        console.log('✔', currentTest);
    }

    if (name) {
        try {
            (await import(`./${slugify(name)}.ts`)).default();
        } catch (error) {
            console.log(`✖ Could not import "tests/${slugify(name)}.ts"`);
        }
    }
}
