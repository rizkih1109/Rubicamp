const fs = require('fs');
const readline = require('node:readline');

if(!process.argv[2]) {
    console.log(`Tolong sertakan nama file sebagai inputan datanya
    Misalnya 'node solution.js data.json'`)
} else {
    const pindahan = fs.readFileSync('./data.json', 'utf-8');
    const object = JSON.parse(pindahan);
    let start = 0, counter = 0;
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: 'Jawaban: '});

    object.push({'definition':'Sebutkan kota yang memiliki julukan kota Intan?','term':'garut'});

    console.log(`Selamat datang di permainan Tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini 'data.json'.
    Untuk bermain, jawablah dengan jawaban yang sesuai.
    Gunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi`);
    console.log(`Pertanyaan: ${object[start].definition}`)

    rl.prompt();

    rl.on('line', (hasil) => {
        if (hasil.toLowerCase() == object[start].term.toLowerCase()) {
            console.log('Anda beruntung')
            start++
            if (start == object.length) {
                console.log('Anda berhasil!')
                rl.close() }
            console.log(`Pertanyaan: ${object[start].definition}`)
        } else if (hasil.toLowerCase() == 'skip') {
            counter = 0;
            object.push(object[start]);
            start++
            console.log(`Pertanyaan: ${object[start].definition}`)
        } else {
            counter++
            console.log(`Anda kurang beruntung! Anda telah salah ${counter} kali, silahkan coba lagi`)
        }

    rl.prompt();
    }).on('close', () => {
    process.exit(0)
    });
}