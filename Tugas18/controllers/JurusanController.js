import Jurusan from '../models/Jurusan.js'
import { showMenu } from '../university.js'
import { rl } from '../models/connect.js' 
import { show, showSearch, submenu } from '../views/JurusanView.js'

export default class JurusanController {

    static menu() {
        submenu()
        rl.question(`Masukkan salah astu nomor dari opsi di atas: `, (answer) => {
            switch (answer) {
                case '1':
                    JurusanController.list()
                    break;
                case '2':
                    JurusanController.search()
                    break;
                case '3':
                    JurusanController.add()
                    break;
                case '4':
                    JurusanController.delete()
                    break;
                case '5':
                    showMenu();
                    break;
                default:
                    console.log(`Nomor yang Anda masukkan tidak sesuai, silahkan coba lagi`)
                    JurusanController.menu()
                    break;
            }
        })
    }

    static list() {
        Jurusan.find(function (data) {
            show(data)
            JurusanController.menu()
        })
    }

    static search() {
        rl.question(`Masukkan Kode Jurusan : `, async (answer) => {
            try {
            const data = await Jurusan.look(answer)
            showSearch(data)
            JurusanController.menu()
            } catch(e) {
                console.log(`Terjadi kesalahan`)
                JurusanController.search()
            }
        })
    }

    static add() {
        console.log(`Lengkapi data di bawah ini :`)
        Jurusan.find(function (data) {
            show(data)
            rl.question(`Kode Jurusan : `, async (kodejurusan) => {
                rl.question(`Nama Jurusan : `, async (namajurusan) => {
                    if (await Jurusan.look(kodejurusan)) {
                        console.log(`Kode Jurusan telah tersedia di database, silahkan coba lagi.`)
                        JurusanController.menu()
                    } else {
                        Jurusan.create(kodejurusan, namajurusan);
                        console.log(`Jurusan telah ditambahkan ke database`)
                        JurusanController.menu()
                    }
                })
            })
        })
    }

    static delete() {
        rl.question(`Masukkan Kode Jurusan : `, async (kodejurusan) => {
            const jurusan = await Jurusan.look(kodejurusan)
            if(jurusan) {
                Jurusan.delete(kodejurusan).then(() => {
                    console.log(`Data Jurusan ${kodejurusan} telah dihapus`)
                    JurusanController.menu()
                })
            } else {
                console.log(`Kode Jurusan yang Anda masukkan tidak terdaftar, silahkan coba lagi`)
                    JurusanController.menu()
            }
        })
    }
}