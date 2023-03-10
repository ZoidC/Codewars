import { squareIt } from "./src/helpers/console";
import { runTests } from "./src/tests";

// • https://www.codewars.com/kata/<kataId>
const kata = "<name>";

// runTests(null, false).then(() => {   // run no test
// runTests(null).then(() => {          // run global test
// runTests(kata, false).then(() => {   // run kata test (need a new file in tests/<kata>.ts)
// runTests(kata).then(() => {          // run global test + kata test (need a new file in tests/<kata>.ts)
runTests(kata).then(() => {
    squareIt(kata, 2);

    // ..
}).catch((e) => console.log(e));
