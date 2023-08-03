const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tulis kalimatmu di sini >'
});

rl.prompt();

rl.on('line', (line) => {
    let vokal = 'aiueo'
    let perkata = line.split(' ')
    let hasil = ''
    for (let i = 0; i < perkata.length; i++){
        if (vokal.includes(perkata[i].charAt(0)) === true) {
            hasil += perkata[i] + ' '
        }
        if (vokal.includes(perkata[i].charAt(0)) === false) {
            hasil += (perkata[i].slice(1) + perkata[i].charAt(0) + 'nyo ');
        }
    }
    console.log(hasil);
  rl.prompt();
}).on('close', () => {
  console.log('Good bye');
  process.exit(0)
});