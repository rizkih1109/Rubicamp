const { readFile } = require('fs')

const bacaData = (file) => new Promise(function (resolve, reject) {
    readFile(file, 'utf-8', (err, data) => {
        if (err) {
            reject(err); 
        } else {
            resolve(data)
        }
    })
})

async function lagiBaca() {
    console.log('mulai')
    const data = await bacaData('data.txt')
    console.log(data)
    console.log('selesai')    
}


lagiBaca()
