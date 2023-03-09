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

export const squareIt = (message: string | string[]) => {
	if (Array.isArray(message)) {
		message = applySpacing(message);
		console.log(topMessage(message.length ? message[0] : ""));
		message.forEach((m) => {
			console.log(aroundMessage(m));
		});
		console.log(botMessage(message.length ? message[message.length - 1] : ""));
	} else {
		console.log(topMessage(message));
		console.log(aroundMessage(message));
		console.log(botMessage(message));
	}
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

export const displayArray2D = (array: number[][]) => {
    console.log(topMessage(array.length ? generateRow(array[0]) : ""));
    for(let x = 0; x < array.length; x++) {
        const row = generateRow(array[x]);
        console.log(aroundMessage(row));
        if (x < array.length - 1) console.log(betweenMessage(row));
    }
    console.log(botMessage(array.length ? generateRow(array[array.length - 1]) : ""));
}
