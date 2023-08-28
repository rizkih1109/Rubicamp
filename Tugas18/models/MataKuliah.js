import { db } from './connect.js'

export default class Matakuliah {
    constructor(obj) {
        this.idmatkul = obj.idmatkul; this.matkul = obj.matkul; this.sks = obj.sks
    };

    save() {
            db.run('INSERT INTO matakuliah (idmatkul, matkul, sks) VALUES (?, ?, ?)', [this.idmatkul, this.matkul, this.sks], (err) => {
                if (err) console.log(err)
            })
           }

    static find(next) {
        db.all('SELECT * FROM matakuliah', (err, data) => {
            if (err) console.log(err)
            next(data)
        })
    }

    static look(idmatkul) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM matakuliah WHERE idmatkul = ?', [idmatkul], (err, data) => {
                if (err) reject(err)
                 else resolve(data)
            })
        })
    }

    static create(idmatkul, matkul, sks) {
        const databaru = new Matakuliah({idmatkul: idmatkul, matkul: matkul, sks: sks})
        return databaru.save()
    }

    static delete(idmatkul) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM matakuliah WHERE idmatkul = ?', [idmatkul], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}