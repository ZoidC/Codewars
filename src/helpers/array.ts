export const compareArrays = <T>(a: T[], b: T[]) => a.length === b.length && a.every((element, index) => element === b[index]);
export const getColumn = <T>(array: T[][], y: number) => array.map(element => element[y]);
export const getLine = <T>(array: T[][], x: number) => array[x];
export const removeDuplicates = <T>(array: T[]) => array.filter((element, index) => array.indexOf(element) === index);
export const removeZeros = (array: number[]) => array.filter((element) => element !== 0);
export const substractContent = <T>(a: T[], b: T[]) => a.filter((element) => !b.includes(element));
