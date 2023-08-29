import Mahasiswa from '../models/Mahasiswa.js'
import Jurusan from '../models/Jurusan.js'
import { show } from '../views/JurusanView.js'
import { showMenu } from '../university.js'
import { rl } from '../models/connect.js'
import { showMahasiswa, showSearch, submenu } from '../views/MahasiswaView.js'

export default class MahasiswaController {

    static menu() {
        submenu()
        rl.question(`Masukkan salah astu nomor dari opsi di atas: `, (answer) => {
            switch (answer) {
                case '1':
                    MahasiswaController.list()
                    break;
                case '2':
                    MahasiswaController.search()
                    break;
                case '3':
                    MahasiswaController.add()
                    break;
                case '4':
                    MahasiswaController.delete()
                    break;
                case '5':
                    showMenu();
                    break;
                default:
                    console.log(`Nomor yang Anda masukkan tidak sesuai, silahkan coba lagi`)
                    DosenController.menu()
                    break;
            }
        })
    }

    static list() {
        Mahasiswa.find().then((data) => {
            showMahasiswa(data);
            MahasiswaController.menu();
        }).catch(() => {
            console.log(`Terjadi kesalahan pada data, silahkan coba lagi`)
            MahasiswaController.menu();
        })
    }

    static search() {
        rl.question(`Masukkan NIM Mahasiswa : `, async (answer) => {
            try {
                const data = await Mahasiswa.look(answer)
                showSearch(data)
                MahasiswaController.menu()
            } catch (e) {
                console.log(`NIM yang Anda masukkan tidak tersedia, silahkan coba lagi`)
                MahasiswaController.search()
            }
        })
    }

    static add() {
        console.log(`Lengkapi data di bawah ini :`)
        Mahasiswa.find().then((data) => {
            showMahasiswa(data);
            rl.question(`NIM : `, (nim) => {
                rl.question(`Nama : `, (namasiswa) => {
                    rl.question(`Tanggal Lahir : `, (lahir) => {
                        rl.question(`Alamat : `, (alamat) => {
                            Jurusan.find(function (data) {
                                show(data)
                                rl.question(`Kode Jurusan : `, async (idjurusan) => {
                                    if (await Mahasiswa.look(nim)) {
                                        console.log(`NIM telah tersedia di database, silahkan coba lagi.`)
                                        MahasiswaController.menu()
                                    } else {
                                        Mahasiswa.create(nim, namasiswa, lahir, alamat, idjurusan, function(){
                                            console.log(`Mahasiswa telah ditambahkan`)
                                            MahasiswaController.menu()
                                        });  
                                    }
                                })
                            })
                        })
                    })
                })
            })
        }).catch(() => {
            console.log(`Terjadi kesalahan pada data, silahkan coba lagi`)
            MahasiswaController.menu();
        })
    }

    static delete() {
        rl.question(`Masukkan NIM Mahasiswa : `, async (nim) => {
            const mahasiswa = await Mahasiswa.look(nim)
            if (mahasiswa) {
                Mahasiswa.delete(nim).then(() => {
                    console.log(`Data Mahasiswa ${nim} telah dihapus`)
                    MahasiswaController.menu()
                })
            } else {
                console.log(`NIM yang Anda masukkan tidak terdaftar, silahkan coba lagi`)
                MahasiswaController.menu()
            }
        })
    }
}