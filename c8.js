function pola(str) {
    const A = str.split(' ');
    let kali1 = A[0];
    let kali2 = A[2];
    let hasil = A[4];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 20; j++) {
            if (kali1.replace('#', i) * kali2 == hasil.replace('#' , j)) {
                return [i,j];
            }
        }
    }
}

console.log(pola('42#3 * 188 = 80#204'))
console.log(pola('8#61 * 895 = 78410#5'))
