
function deret(length) {
    let data1 = []
    let data2 = []
    let a = 1
    let b = 2
    
    for (let i = 0; i <= length; i++) {
        empat = a + (4 * i)
        enam = b + (6 * i)
        data1.push(empat)
        data2.push(enam)
    }

    console.log(data1);
    console.log(data2)
    
}

deret(10);