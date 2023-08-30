import Kontrak from '../models/Kontrak.js'
import Mahasiswa from '../models/Mahasiswa.js'
import Matakuliah from '../models/Matakuliah.js'
import Dosen from '../models/Dosen.js'
import { showDosen } from '../views/DosenView.js'
import { showMatkul } from '../views/MataKuliahView.js'
import { showMahasiswa } from '../views/MahasiswaView.js'
import { barrier, showMenu } from '../university.js'
import { rl } from '../models/connect.js'
import { showKontrak, tabelKontrak, submenu } from '../views/KontrakView.js'

export default class KontrakController {

    static menu() {
        submenu()
        rl.question(`Masukkan salah astu nomor dari opsi di atas: `, (answer) => {
            switch (answer) {
                case '1':
                    KontrakController.list()
                    break;
                case '2':
                    KontrakController.search()
                    break;
                case '3':
                    KontrakController.add()
                    break;
                case '4':
                    KontrakController.delete()
                    break;
                case '5':
                    KontrakController.change()
                    break;
                case '6':
                    showMenu();
                    break;
                default:
                    console.log(`Nomor yang Anda masukkan tidak sesuai, silahkan coba lagi`)
                    KontrakController.menu()
                    break;
            }
        })
    }

    static list() {
        Kontrak.find().then((data) => {
            showKontrak(data);
            KontrakController.menu();
        }).catch(() => {
            console.log(`Terjadi kesalahan pada data, silahkan coba lagi`)
            KontrakController.menu();
        })
    }

    static search() {
        Mahasiswa.find().then((data) => {
            showMahasiswa(data)
            rl.question(`Masukkan NIM Mahasiswa : `, async (answer) => {
                const kontrak = await Kontrak.look(answer)
                if (kontrak) {
                    console.log(`Daftar kontrak mahasiswa dengan NIM ${answer} adalah: `)
                    tabelKontrak(kontrak);
                    KontrakController.menu()
                } else {
                    console.log(`NIM yang Anda masukkan tidak tersedia, silahkan coba lagi`)
                    KontrakController.search()
                }
            })
        })
    }

    static add() {
        console.log(`Lengkapi data di bawah ini: `)
        Mahasiswa.find().then((data) => {
            showMahasiswa(data);
            rl.question(`Masukkan NIM: `, (nim) => {
                Matakuliah.find(function (data) {
                    showMatkul(data);
                    rl.question(`Masukkan Kode Mata Kuliah: `, (idmatkul) => {
                        Dosen.find(function (data) {
                            showDosen(data);
                            rl.question(`Masukkan NIP Dosen: `, async (nip) => {
                                if (await Kontrak.findforAdd(nim, idmatkul)) {
                                    console.log(`Kontrak Mahasiswa telah tersedia, silahkan coba lagi`)
                                    KontrakController.menu()
                                } else {
                                    Kontrak.create(nim, idmatkul, nip, function () {
                                        console.log(`Kontrak telah ditambahkan`)
                                        Kontrak.find().then((data) => {
                                            showKontrak(data);
                                            KontrakController.menu();
                                        })
                                    })
                                }
                            })
                        })
                    })
                })
            })
        })
    }

    static delete() {
        rl.question(`Masukkan ID Kontrak : `, async (idkontrak) => {
            const kontrak = await Kontrak.look(idkontrak)
            if (kontrak) {
                Kontrak.delete(idkontrak).then(() => {
                    console.log(`Data Kontrak dengan ID ${idkontrak}, telah dihapus`)
                    KontrakController.menu()
                })
            } else {
                console.log(`NIM yang Anda masukkan tidak terdaftar, silahkan coba lagi`)
                KontrakController.menu()
            }
        })
    }

    static change() {
        Kontrak.find().then((data) => {
            showKontrak(data);
            rl.question(`Masukkan NIM Mahasiswa : `, async (nim) => {
                const kontrak = await Kontrak.look(nim)
                if (kontrak) {
                    barrier()
                    console.log(`Detail mahasiswa dengan NIM ${nim} adalah: `)
                    tabelKontrak(kontrak);
                    barrier()
                    rl.question(`Masukkan ID yang akan diubah nilainya: `, async (idkontrak) => {
                        if (await Kontrak.findofUpdate(idkontrak, nim)) {
                            barrier()
                            rl.question(`Masukkan nilai yang baru: `, async (nilai) => {
                                barrier()
                                await Kontrak.update(nilai, nim, idkontrak);
                                console.log(`Nilai telah diupdate`)
                                Kontrak.find().then((data) => {
                                    showKontrak(data);
                                    KontrakController.menu()
                                })
                            })
                        } else {
                            console.log(`ID Kontrak dan NIM Mahasiswa yang Anda masukkan tidak tersedia, silahkan coba lagi`)
                            KontrakController.menu()
                        }
                    })
                } else {
                    console.log(`NIM yang Anda masukkan tidak tersedia, silahkan coba lagi`)
                    KontrakController.search()
                }
            })
        }).catch(() => {
            console.log(`Terjadi kesalahan pada data, silahkan coba lagi`)
            KontrakController.menu();
        })
    }
}