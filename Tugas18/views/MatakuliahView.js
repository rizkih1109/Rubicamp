import Table from 'cli-table'
import { barrier } from '../university.js';

export function showMatkul(data = []) {
    var table = new Table({
        head: ['Kode Mata Kuliah', 'Mata Kuliah', 'Jumlah SKS']
      , colWidths: [15, 40, 15]
    });

    data.forEach((item) => {
        table.push([item.idmatkul, item.matkul, item.sks])
    })
    
    console.log(table.toString());
}

export function submenu() {
    barrier()
    console.log(`
    Silahkan pilih opsi di bawah ini :
    [1] Daftar Mata Kuliah
    [2] Cari Mata Kuliah
    [3] Tambah Mata Kuliah
    [4] Hapus Mata Kuliah
    [5] Kembali
            `)
    barrier()
}

export function showSearch(data) {
    console.log(`
===========================================
Detail Mata Kuliah dengan Kode '${data.idmatkul}' :
Kode Mata Kuliah    : ${data.idmatkul}
Mata Kuliah         : ${data.matkul}
Jumlah SKS          : ${data.sks}
    `)
}