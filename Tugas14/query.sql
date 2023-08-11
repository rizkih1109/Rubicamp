CREATE TABLE jurusan(
    idjurusan VARCHAR(3) PRIMARY KEY NOT NULL,
    namajurusan VARCHAR(30) NOT NULL
);

INSERT INTO jurusan (idjurusan, namajurusan) VALUES
("J01", "Matematika"),
("J02", "Biologi"),
("J03", "Fisika");

CREATE TABLE mahasiswa(
    nim VARCHAR(3) PRIMARY KEY NOT NULL,
    nama VARCHAR(100) NOT NULL,
    alamat VARCHAR(200) NOT NULL,
    jurusan VARCHAR(30) NOT NULL,
    idjurusan VARCHAR(3) NOT NULL,
    FOREIGN KEY (idjurusan) REFERENCES jurusan(idjurusan)
);

INSERT INTO mahasiswa (nim, nama, alamat, jurusan, idjurusan) VALUES
("001", "Ahmad Rifai", "Kuningan", "Matematika", "J01"),
("002", "Ghifari Gilman", "Sumedang", "Biologi", "J02"),
("003", "Rasyid Fasha", "Bandung", "Fisika", "J03"),
("004", "Syifa Fauziah", "Bandung", "Matematika", "J01"),
("005", "Andini Nurfadilah", "Cimahi", "Fisika", "J03");

CREATE TABLE dosen(
    nip VARCHAR(6) PRIMARY KEY NOT NULL,
    namadosen VARCHAR(100) NOT NULL,
    idjurusan VARCHAR(3) NOT NULL,
    FOREIGN KEY (idjurusan) REFERENCES jurusan(idjurusan)
);

INSERT INTO dosen (nip, namadosen, idjurusan) VALUES
("MAT001", "Syamsudin", "J01"),
("MAT002", "Dedi Kusuma", "J01"),
("BIO001", "Susilawati", "J02"),
("FIS001", "Dindin Nasruddin", "J03");

CREATE TABLE matakuliah(
    idmatakuliah VARCHAR(4) PRIMARY KEY NOT NULL,
    namamatkul VARCHAR(100) NOT NULL,
    sks INTEGER NOT NULL
);

INSERT INTO matakuliah (idmatakuliah, namamatkul, sks) VALUES
("M001", "Kalkulus I", "3"),
("M002", "Integral", "2"),
("B001", "Bioteknologi", "3"),
("F001", "Fisika Kuantum", "3");

CREATE TABLE kontrak(
    idkontrak VARCHAR(3) PRIMARY KEY NOT NULL,
    nim VARCHAR(3) NOT NULL,
    idjurusan VARCHAR(3) NOT NULL,
    nip VARCHAR(6) NOT NULL,
    idmatakuliah VARCHAR(4) NOT NULL,
    nilai VARCHAR(1) NOT NULL,
    FOREIGN KEY (nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY (idjurusan) REFERENCES jurusan(idjurusan),
    FOREIGN KEY (nip) REFERENCES dosen(nip),
    FOREIGN KEY (idmatakuliah) REFERENCES matakuliah(idmatakuliah)
);

INSERT INTO kontrak (idkontrak, nim, idjurusan, nip, idmatakuliah, nilai) VALUES
("K01", "001", "J01", "MAT001", "M001", "A"),
("K02", "002", "J02", "BIO001", "B001", "C"),
("K03", "003", "J03", "FIS001", "F001", "B"),
("K04", "004", "J01", "MAT002", "M002", "C"),
("K05", "005", "J03", "FIS001", "F001", "A");
