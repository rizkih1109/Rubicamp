function spiral(param1) {

    let firstRow = 0
    let lastRow = param1 - 1
    let firstCo = 0
    let lastCo = param1 - 1
    let nilai = 0
    let Arr = []

    for (let i = 0; i < param1; i++) {
        Arr.push([])
    }

    for (let j = 0; j < param1; j++) {
        for(let k = 0; k < param1; k++) {
            Arr[j][k] = nilai
            nilai++
        }
    }
    
    let Array = []
    while (firstCo <= lastCo && firstRow <= lastRow) {
        for (let i = firstCo; i <= lastCo; i++) {
            Array.push(Arr[firstRow][i]);
        } 
        firstRow++;
        
        for (let i = firstRow; i <= lastRow; i++) {
            Array.push(Arr[i][lastCo]);
        } 
        lastCo--;
        
        for (let i = lastCo; i >= firstCo; i--) {
            Array.push(Arr[lastRow][i]);
        } 
        lastRow--;
        
        for (let i = lastRow; i >= firstRow; i--) {
            Array.push(Arr[i][firstCo]);
        } 
        firstCo++;
    
    }    

console.log(Array)
}

spiral(5);
spiral(6);
spiral(7);