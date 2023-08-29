import { db } from './connect.js'

export default class Mahasiswa {
    constructor(obj) {
        this.nim = obj.nim; this.namasiswa = obj.namasiswa; this.lahir = obj.lahir;
        this.alamat = obj.alamat; this.idjurusan = obj.idjurusan
    };

    save(next) {
        db.run('INSERT INTO mahasiswa (nim, namasiswa, lahir, alamat, idjurusan) VALUES (?, ?, ?, ?, ?)', [this.nim, this.namasiswa, this.lahir, this.alamat, this.idjurusan], (err) => {
            if (err) console.log(err)
            else next()
        })
    }

    static find() {
        return new Promise(function (resolve, reject) {
            db.all('SELECT nim, namasiswa, lahir, alamat, jurusan.kodejurusan, jurusan.namajurusan FROM mahasiswa LEFT JOIN jurusan ON mahasiswa.idjurusan=jurusan.kodejurusan;', (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static look(nim) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM mahasiswa WHERE nim = ?', [nim], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static create(nim, namasiswa, lahir, alamat, idjurusan, next) {
        const databaru = new Mahasiswa({ nim: nim, namasiswa: namasiswa, lahir: lahir, alamat: alamat, idjurusan: idjurusan })
        databaru.save(function () {
            next()
        })
    }

    static delete(nim) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM mahasiswa WHERE nim = ?', [nim], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}