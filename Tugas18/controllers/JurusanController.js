import Jurusan from '../models/Jurusan.js'
import { rl, showMenu } from '../university.js'
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
        })

    }

    static delete() {
        rl.question(`Masukkan Kode Jurusan : `, (answer) => {
            
            Jurusan.delete(answer).then(() => {
                console.log(`Data Jurusan ${answer} telah dihapus`)
                JurusanController.menu()
            }).catch((err) => {
                console.log(`Kode Jurusan yang Anda masukkan tidak terdaftar, silahkan coba lagi`)
                JurusanController.menu()
            })
        })

    }
}