import readline from 'readline'
import JurusanController from './controllers/JurusanController.js';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

export function showMenu() {
    console.log(`
Silahkan pilih opsi di bawah ini : 
[1] Mahasiswa
[2] Jurusan
[3] Dosen
[4] Mata Kuliah
[5] Kontrak
[6] Keluar
`);

    rl.question(`Masukkan salah satu nomor dari opsi di atas : `, (answer) => {
        switch (answer) {
            case '1':
                console.log('Mahasiswa menu')
                break;
            case '2':
                JurusanController.menu();
                break;
            case '3':
                console.log('Dosen menu')
                break;
            case '4':
                console.log('Mata Kuliah menu')
                break;
            case '5':
                console.log('Kontrak menu')
                break;
            case '6':
                process.exit(0);
            default:
                console.log(`Nomor yang Anda masukkan tidak sesuai, silahkan coba lagi`)
                showMenu();
                break;
        }
    })
}

showMenu()