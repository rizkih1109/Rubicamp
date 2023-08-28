import { db } from './connect.js'

export default class Jurusan {
    constructor(obj) {
        this.kodejurusan = obj.kodejurusan; this.namajurusan = obj.namajurusan
    };

    save() {
            db.run('INSERT INTO jurusan (kodejurusan, namajurusan) VALUES (?, ?)', [this.kodejurusan, this.namajurusan], (err) => {
                if (err) console.log(err)
            })
           }

    static find(next) {
        db.all('SELECT * FROM jurusan', (err, data) => {
            if (err) console.log(err)
            next(data)
        })
    }

    static look(kodejurusan) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM jurusan WHERE kodejurusan = ?', [kodejurusan], (err, data) => {
                if (err) reject(err)
                 else resolve(data)
            })
        })
    }

    static create(kodejurusan, nama) {
        const databaru = new Jurusan({kodejurusan: kodejurusan, namajurusan: nama})
        return databaru.save()
    }

    static delete(kodejurusan) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM jurusan WHERE kodejurusan = ?', [kodejurusan], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}