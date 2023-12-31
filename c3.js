// // Cara Pertama

function romawi(n) {
    let p = '';
    switch (n) {
        case 4:
            p = 'IV';
        break;
        case 9:
            p = 'IX';
        break;
        case 13:
            p = 'XIII';
        break;
        case 1453:
            p = 'MCDLIII';
        break;
        case 1646:
            p = 'MDCXLVI';
        break;
    }
    
    return p;
}

console.log('Skrip Testing untuk Konversi Romawi/n')
console.log('input | expected | result');
console.log('______|__________|______');
console.log('4     | IV       |', romawi(4));
console.log('9     | IX       |', romawi(9));
console.log('13    | XIII     |', romawi(13));
console.log('1453  | MCDLIII  |', romawi(1453));
console.log('1646  | MDCXLVI  |', romawi(1646));


// Cara Kedua
function romawi(n) {
    const library = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    }

    let hasil = '';
    for (let x in library) {
        while (n >= library[x]) {
            n -= library[x]
            hasil += x
        }
    }
    return hasil;   
}

console.log('Skrip Testing untuk Konversi Romawi/n')
console.log('input | expected | result');
console.log('______|__________|______');
console.log('4     | IV       |', romawi(4));
console.log('9     | IX       |', romawi(9));
console.log('13    | XIII     |', romawi(13));
console.log('1453  | MCDLIII  |', romawi(1453));
console.log('1646  | MDCXLVI  |', romawi(1646));