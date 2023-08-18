// Cara Pertama

function deretKaskus(n) {
    const keltiga = [];
    for (let i = 0; i < n; i++) {
    keltiga[i] = 3 * (i + 1);
    if(keltiga[i] % 5 == 0 && keltiga[i] % 6 == 0) {
        keltiga[i] = 'KASKUS';
    } 
    if(keltiga[i] % 6 == 0) {
        keltiga[i] = 'KUS';
    } 
    if(keltiga[i] % 5 == 0) {
        keltiga[i] = 'KAS';
    }
    
    }

    return keltiga;
}

console.log(deretKaskus(10));


// Cara Kedua

function deretKaskus(n) {
    const kelbil = []
    let B = n * 3
    for (let i = 3; i <= B; i += 3) {
        if (i % 5 == 0 && i % 6 == 0) kelbil.push('KASKUS');
        else if (i % 6 == 0) kelbil.push('KUS');
        else if (i % 5 == 0) kelbil.push('KAS');
        else kelbil.push(i)
    }
    return kelbil;
}

console.log(deretKaskus(10))



























