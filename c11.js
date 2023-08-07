const fs = require('fs');
const pindahan = fs.readFileSync('./data.json', 'utf-8');
const object = JSON.parse(pindahan);
const readline = require('node:readline');
let start = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tebakanmu: '
});

object.push({'definition':'Sebutkan kota yang memiliki julukan kota Intan?','term':'garut'});

console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya?');
console.log(`Pertanyaan: ${object[start].definition}`)

rl.prompt();

rl.on('line', (hasil) => {
    if (hasil.toString().toLowerCase() == object[start].term.toString().toLowerCase()) {
        console.log('Selamat Anda benar!')
        start++
        if (start == object.length) {
          rl.close()
        }
        console.log(`Pertanyaan: ${object[start].definition}`)

    } else {
        console.log('WKwkwkwk, Anda kurang beruntung!')
    }

  rl.prompt();
}).on('close', () => {
  console.log('Good bye');
  process.exit(0)
});

