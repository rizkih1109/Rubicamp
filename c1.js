// Cara Pertama
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++)
        total += arguments[i]
    console.log(total);
}
sum(1,2,7);
sum(1,4);
sum(11);
sum(10,3,6,7,9);


// Cara Kedua
function sum(...goods) {
    let total = 0;
    for (let good of goods)
        total += good;
    console.log(total);
}

sum(1,2,7);
sum(1,4);
sum(11);
sum(10,3,6,7,9);





