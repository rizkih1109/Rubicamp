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
