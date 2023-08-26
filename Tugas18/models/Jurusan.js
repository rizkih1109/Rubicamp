import { db } from './connect.js'

export default class Jurusan {
    constructor(obj) {
        this.kodejurusan = obj.kodejurusan
        this.namajurusan = obj.namajurusan
    }

    save(next) {
        db.run('INSERT INTO jurusan (kodejurusan, namajurusan) VALUES (?, ?)', [this.kodejurusan, this.namajurusan], (err) => {
            if (err) console.log(err)
            next()
        })
    }

    static find(next) {
        let sql = 'SELECT * FROM jurusan'
        db.all(sql, (err, rows) => {
            if (err) console.log(err)
            next(rows)
        })
    }

    static look(kodejurusan) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM jurusan WHERE kodejurusan = ?', [kodejurusan], (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    static create(kodejurusan, namajurusan) {
        const databaru = new Jurusan({kodejurusan: kodejurusan, namajurusan: namajurusan})
        return Jurusan.save()
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