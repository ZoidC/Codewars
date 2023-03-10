import { compareArrays } from "./array";

export const equals = <T>(a: T, b: T, testName: string) => {
    if (Array.isArray(a)) throw new Error(`Could not test ${testName}(), use testArrayEquals() instead!`);
    if (a !== b) throw new Error(`TEST failed : ${testName}()`);
}

export const arrayEquals = <T>(a: T[], b: T[], testName: string) => {
    if (!(compareArrays(a, b))) throw new Error(`TEST failed : ${testName}()`);
}
