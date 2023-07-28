function sentencesManipulation(word) {
    let vokal = 'aiueo'
    let perkata = word.split(' ')
    let hasil = ''
    for (let i = 0; i < perkata.length; i++){
        if (vokal.includes(perkata[i].charAt(0)) === true) {
            hasil += perkata[i] + ' '
        }
        if (vokal.includes(perkata[i].charAt(0)) === false) {
            hasil += (perkata[i].slice(1) + perkata[i].charAt(0) + 'nyo ');
        }
    }
    return console.log(hasil);

}

sentencesManipulation('ibu pergi ke pasar bersama aku');