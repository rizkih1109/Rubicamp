function stringManipulation(word) {
    var A = ('aiueo');
    if (A.includes(word.charAt(0)) == true) {
        console.log(word);
    } else {
        console.log(word.slice(1) + word.charAt(0) + 'nyo');
    }
}

stringManipulation('ayam');
stringManipulation('bebek');