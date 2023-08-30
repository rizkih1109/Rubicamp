import DosenController from './controllers/DosenController.js';
import JurusanController from './controllers/JurusanController.js';
import KontrakController from './controllers/KontrakController.js';
import MahasiswaController from './controllers/MahasiswaController.js';
import MatakuliahController from './controllers/MatakuliahController.js';
import LoginController from './controllers/LoginController.js';
import { rl } from './models/connect.js';

export function barrier() {
    let line = ''
    for (let i = 0; i < 100; i++) line += '='
    return console.log(line)
}

export function welcome() {
    barrier()
    console.log('Welcome to Universitas Pendidikan Indonesia\nJl. Setiabudi No. 225')
    barrier()

    LoginController.login();
}

export function showMenu() {
    barrier()
    console.log(`
Silahkan pilih opsi di bawah ini : 
[1] Mahasiswa
[2] Jurusan
[3] Dosen
[4] Mata Kuliah
[5] Kontrak
[6] Keluar
`);
    barrier()
    rl.question(`Masukkan salah satu nomor dari opsi di atas : `, (answer) => {
        switch (answer) {
            case '1':
                MahasiswaController.menu();
                break;
            case '2':
                JurusanController.menu();
                break;
            case '3':
                DosenController.menu();
                break;
            case '4':
                MatakuliahController.menu();
                break;
            case '5':
                KontrakController.menu();
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

welcome()

