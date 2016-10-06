var alphabet = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z'];

function stackLetters(theAlphabetArray) {

	var text ='' , 
		currentLetter;

for (var i = 0; i < theAlphabetArray.length; i++){

		if (i % 3 === 0) {
			text = text + " ";
		}
		
		currentLetter = theAlphabetArray[i];
		
		text = text + currentLetter;
		
		console.log(text);

}

}

stackLetters(alphabet);
