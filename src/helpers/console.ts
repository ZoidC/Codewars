const topMessage = (message: string) => {
	let line = "╔═";
	for (const char of message) {
		line += char === "║" ? "╦" : "═";
	}
	line += "═╗";
	return line;
}

const aroundMessage = (message: string) => {
	return `║ ${message} ║`;
}

const betweenMessage = (message: string) => {
    let line = "╠═";
	for (const char of message) {
		line += char === "║" ? "╬" : "═";
	}
	line += "═╣";
	return line;
}

const botMessage = (message: string) => {
	let line = "╚═";
	for (const char of message) {
		line += char === "║" ? "╩" : "═";
	}
	line += "═╝";
	return line;
}

const applySpacing = (messages: string[]) => {
    const maxLength = messages.reduce((acc, next) => (acc < next.length ? next.length : acc), 0);
    return messages.map(message => `${message}${" ".repeat(maxLength - message.length)}`);
}

// This function also replaces 0 by empty spaces
const generateRow = (array: number[]) => {
    return array.reduce((acc, next, index, array) => {
        return `${acc}${next === 0 ? " " : next}${index === array.length - 1 ? "" : " ║ "}`;
    }, "");
}

/*
╔═════════════╗
║ Square it ! ║
╚═════════════╝
*/

export const squareIt = (message: string | string[], nbSquare: number = 1): string[] => {
    if (nbSquare <= 0) throw new Error(`${nbSquare} must be higher than 0`);

    const display: string[] = [];
	if (Array.isArray(message)) {
		message = applySpacing(message);
        display.push(topMessage(message.length ? message[0] : ""));
		message.forEach((m) => {
			display.push(aroundMessage(m));
		});
		display.push(botMessage(message.length ? message[message.length - 1] : ""));
	} else {
		display.push(topMessage(message));
		display.push(aroundMessage(message));
		display.push(botMessage(message));
	}

    nbSquare--;
    if(nbSquare > 0) return squareIt(display, nbSquare);

    display.forEach(line => console.log(line));
    return display;
}

/*
╔═══╦═══╦═══╗
║ 1 ║ 2 ║ 3 ║
╠═══╬═══╬═══╣
║ 4 ║ 5 ║ 6 ║
╠═══╬═══╬═══╣
║ 7 ║ 8 ║ 9 ║
╚═══╩═══╩═══╝
*/

export const displayArray2D = (array: number[][], log: boolean = true): string[] => {
    const display: string[] = [];
    display.push(topMessage(array.length ? generateRow(array[0]) : ""));
    for(let x = 0; x < array.length; x++) {
        const row = generateRow(array[x]);
        display.push(aroundMessage(row));
        if (x < array.length - 1) display.push(betweenMessage(row));
    }
    display.push(botMessage(array.length ? generateRow(array[array.length - 1]) : ""));

    if (log) display.forEach(line => console.log(line));
    return display;
}
