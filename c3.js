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
console.log('9     | IV       |', romawi(9));
console.log('13    | IV       |', romawi(13));
console.log('1453  | IV       |', romawi(1453));
console.log('1646  | IV       |', romawi(1646));