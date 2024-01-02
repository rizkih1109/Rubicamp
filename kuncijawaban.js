
// Nomor 1

function sum() { // parameternya adalah argument, dan argument dalam bentuk objek, sehingga harus diubah menjadi array

    console.log(Object.values(arguments).reduce((total, nilai) => total + nilai));

    // Object.values mengubah arguments menjadi array
    // reduce menjumlahkan semua elemen yang ada dalam array

}

sum(1,2,7);
sum(1,4);
sum(11);
sum(10,3,6,7,9);


// Nomor 2

function deretKaskus(n) {

    const hasil = [];
    let katalis = n*3;

    for (let i = 3; i <= katalis; i +=3) {
        if (i % 5 == 0 && i % 6 == 0) hasil.push('KASKUS');
        else if (i % 6 == 0) hasil.push('KUS');
        else if (i % 5 == 0) hasil.push('KAS');
        else hasil.push(i);
    }
    return hasil;
}

console.log(deretKaskus(10));

// Nomor 3

function romawi (n) {

    const dictionary = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let hasil = ''

    for (const bil in dictionary) {
        while (n >= dictionary[bil]) {
            n -= dictionary[bil];
            hasil += bil
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

// Nomor 4
