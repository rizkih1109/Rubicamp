import Matakuliah from '../models/Matakuliah.js'
import { showMenu } from '../university.js'
import { rl } from '../models/connect.js' 
import { show, showSearch, submenu } from '../views/MataKuliahView.js'

export default class MatakuliahController {

    static menu() {
        submenu()
        rl.question(`Masukkan salah astu nomor dari opsi di atas: `, (answer) => {
            switch (answer) {
                case '1':
                    MatakuliahController.list()
                    break;
                case '2':
                    MatakuliahController.search()
                    break;
                case '3':
                    MatakuliahController.add()
                    break;
                case '4':
                    MatakuliahController.delete()
                    break;
                case '5':
                    showMenu();
                    break;
                default:
                    console.log(`Nomor yang Anda masukkan tidak sesuai, silahkan coba lagi`)
                    MatakuliahController.menu()
                    break;
            }
        })
    }

    static list() {
        Matakuliah.find(function (data) {
            show(data)
            MatakuliahController.menu()
        })
    }

    static search() {
        rl.question(`Masukkan ID Mata Kuliah : `, async (answer) => {
            try {
            const data = await Matakuliah.look(answer)
            showSearch(data)
            MatakuliahController.menu()
            } catch(e) {
                console.log(`Terjadi kesalahan`)
                MatakuliahController.search()
            }
        })
    }

    static add() {
        console.log(`Lengkapi data di bawah ini :`)
        Matakuliah.find(function (data) {
            show(data)
            rl.question(`ID Mata Kuliah : `, async (idmatkul) => {
                rl.question(`Nama Mata Kuliah : `, async (matkul) => {
                    rl.question(`Jumlah SKS : `, async (sks) => {
                        if (await Matakuliah.look(idmatkul)) {
                            console.log(`ID Mata Kuliah telah tersedia di database, silahkan coba lagi.`)
                            Matakuliah.menu()
                        } else {
                            Matakuliah.create(idmatkul, matkul, sks);
                            console.log(`Mata Kuliah telah ditambahkan ke database`)
                            MatakuliahController.menu()
                        }    
                    } )
                })
            })
        })
    }

    static delete() {
        rl.question(`Masukkan ID Mata Kuliah : `, async (idmatkul) => {
            const matakuliah = await Matakuliah.look(idmatkul)
            if(matakuliah) {
                Matakuliah.delete(idmatkul).then(() => {
                    console.log(`Mata Kuliah dengan ID ${idmatkul} telah dihapus`)
                    MatakuliahController.menu()
                })
            } else {
                console.log(`ID Mata Kuliah yang Anda masukkan tidak terdaftar, silahkan coba lagi`)
                    MatakuliahController.menu()
            }
        })
    }
}