import { db } from './connect.js'

export default class Kontrak {
    constructor(obj) {
        this.nim = obj.nim; this.idmatkul = obj.idmatkul
        this.nip = obj.nip; this.nilai = " "
    };

    save(next) {
        db.run('INSERT INTO kontrak (nim, idmatkul, nip, nilai ) VALUES (?, ?, ?, ?)', [this.nim, this.idmatkul, this.nip, this.nilai], (err) => {
            if (err) console.log(err)
            else next()
        })
    }

    static find() {
        return new Promise(function (resolve, reject) {
            db.all('SELECT idkontrak, kontrak.nim AS nim, mahasiswa.namasiswa AS nama, matakuliah.matkul AS matkul, dosen.namadosen AS dosen, kontrak.nilai AS nilai FROM kontrak LEFT JOIN mahasiswa ON kontrak.nim=mahasiswa.nim LEFT JOIN matakuliah ON kontrak.idmatkul=matakuliah.idmatkul LEFT JOIN dosen ON kontrak.nip=dosen.nip;', (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static look(nim) {
        return new Promise(function (resolve, reject) {
            db.all('SELECT * FROM kontrak WHERE nim = ?', [nim], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static create(nim, idmatkul, nip, next) {
        const databaru = new Kontrak({ nim: nim, idmatkul: idmatkul, nip: nip})
        databaru.save(function () {
            next()
        })
    }

    static delete(idkontrak) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM Kontrak WHERE idkontrak = ?', [idkontrak], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }

    static update(nilai, nim, idkontrak) {
        return new Promise(function(resolve, reject) {
            db.run(`UPDATE kontrak SET nilai = ? WHERE nim = ? AND idkontrak = ?`, [nilai, nim, idkontrak], (err) => {
                if (err)  reject(err)
                else resolve()
            })
        })
    }

    static findforAdd(nim, idmatkul) {
        return new Promise (function(resolve, reject) {
            db.get(`SELECT * FROM kontrak WHERE nim = ? AND idmatkul = ?`, [nim, idmatkul], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static findofUpdate(idkontrak, nim) {
        return new Promise (function(resolve, reject) {
            db.get(`SELECT * FROM kontrak WHERE idkontrak = ? AND nim = ? `, [idkontrak, nim], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }
}

