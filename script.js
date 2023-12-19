const extendHex = (shortHex) => {
	let i = shortHex.length-3, isCapitalized = false;
	let output = "#";
	
	while (i < shortHex.length) {
		let asciiCode = shortHex[i].charCodeAt(0);
		if (asciiCode >= 65 && asciiCode <= 90) {
			isCapitalized = true;
		}
		output += shortHex[i] + shortHex[i];
		i++
	}

	return isCapitalized ? output.toUpperCase() : output;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
