
///Ejercicio 4
//one hour
 function countChars(word) {

	//console.log("Count characters in word");

        if (!word) {
            return word;
        }

        var array = word.split('');
        var currentChar = array[0];
        var count = 1;
        var compression = "";

        for (var i = 1; i < array.length; i++) {
            if (array[i] === currentChar) {
                count++;
            } else {
                compression += currentChar + count;
                currentChar = array[i];
                count = 1;
            }
        }
        compression += currentChar + count;
        
        if (compression.length > word.length) {
            return word;
        }

        return compression;
    }