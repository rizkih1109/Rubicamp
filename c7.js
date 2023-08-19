function weirdMultiple(num) {

    if (num < 10) {
        return num;
    }

    const A = num.toString();
    let hasil = 1;
    for (let i = 0; i < A.length; i++) hasil *= A[i]
    return weirdMultiple(hasil);
} 

console.log(weirdMultiple(39));
console.log(weirdMultiple(999));
console.log(weirdMultiple(3));