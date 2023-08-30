import Table from 'cli-table'
import { barrier } from '../university.js';

export function showDosen(data = []) {
    var table = new Table({
        head: ['NIP', 'Nama Dosen']
      , colWidths: [15, 30]
    });

    data.forEach((item) => {
        table.push([item.nip, item.namadosen])
    })
    
    console.log(table.toString());
}

export function submenu() {
    barrier()
    console.log(`
    Silahkan pilih opsi di bawah ini :
    [1] Daftar Dosen
    [2] Cari Dosen
    [3] Tambah Dosen
    [4] Hapus Dosen
    [5] Kembali
            `)
    barrier()
}

export function showSearch(data) {
    console.log(`
===========================================
Detail Dosen dengan NIP '${data.nip}' :
NIP          : ${data.nip}
Nama Dosen   : ${data.namadosen}
    `)
}