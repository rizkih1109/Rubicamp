CREATE TABLE jurusan(
    idjurusan VARCHAR(3) PRIMARY KEY NOT NULL,
    namajurusan VARCHAR(30) NOT NULL
);

INSERT INTO jurusan (idjurusan, namajurusan) VALUES
("J01", "Matematika"),
("J02", "Informatika"),
("J03", "Fisika");

CREATE TABLE mahasiswa(
    nim VARCHAR(3) PRIMARY KEY NOT NULL,
    nama VARCHAR(100) NOT NULL,
    alamat VARCHAR(200) NOT NULL,
    idjurusan VARCHAR(3) NOT NULL,
    FOREIGN KEY (idjurusan) REFERENCES jurusan(idjurusan)
);

INSERT INTO mahasiswa (nim, nama, alamat, idjurusan) VALUES
("001", "Ahmad Rifai", "Kuningan", "J01"),
("002", "Ghifari Gilman", "Sumedang", "J02"),
("003", "Rasyid Fasha", "Bandung",  "J03"),
("004", "Syifa Fauziah", "Bandung", "J01"),
("005", "Andini Nurfadilah", "Cimahi", "J02"),
("006", "Farabi Adryansyah", "Jakarta", "J01");

CREATE TABLE dosen(
    nip VARCHAR(5) PRIMARY KEY NOT NULL,
    namadosen VARCHAR(100) NOT NULL,
    idjurusan VARCHAR(3) NOT NULL,
    FOREIGN KEY (idjurusan) REFERENCES jurusan(idjurusan)
);

INSERT INTO dosen (nip, namadosen, idjurusan) VALUES
("DS001", "Syamsudin", "J01"),
("DS002", "Dedi Kusuma", "J01"),
("DS003", "Dindin Nasruddin", "J01"),
("DS004", "Nabila Shofarini", "J01"),
("DS005", "Yudi Wahyudi", "J02"),
("DS006", "Tina Karmila", "J02"),
("DS007", "Yuli Arleni", "J02"),
("DS008", "Yudi Wahyudi", "J02"),
("DS009", "Suhendi", "J03"),
("DS010", "Siska Muliawati", "J03"),
("DS011", "Friska Salsabila", "J03"),
("DS012", "Ahmad Gunawan", "J03");

CREATE TABLE matakuliah(
    idmatakuliah VARCHAR(4) PRIMARY KEY NOT NULL,
    namamatkul VARCHAR(100) NOT NULL,
    sks INTEGER NOT NULL
);

INSERT INTO matakuliah (idmatakuliah, namamatkul, sks) VALUES
("MK01", "Kalkulus I", "3"),
("MK02", "Metode Numerik", "4"),
("MK03", "Aljabar", "3"),
("MK04", "Diferensial", "2"),
("MK05", "Pengantar Informatika", "2"),
("MK06", "Algoritma", "3"),
("MK07", "Data Mining", "3"),
("MK08", "Pemerograman Web", "3"),
("MK09", "Fisika Kuantum", "3"),
("MK10", "Fisika Magnetik", "3"),
("MK11", "Fisika Modern", "3"),
("MK12", "Termodinamika", "3");

CREATE TABLE kontrak(
    idkontrak VARCHAR(4) PRIMARY KEY NOT NULL,
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
("K001", "001", "J01", "DS001", "MK01", "A"),
("K002", "001", "J01", "DS002", "MK02", "E"),
("K003", "002", "J02", "DS005", "MK05", "C"),
("K004", "002", "J02", "DS006", "MK06", "A"),
("K005", "003", "J03", "DS010", "MK10", "A"),
("K006", "004", "J01", "DS001", "MK01", "C"),
("K007", "004", "J01", "DS002", "MK02", "A"),
("K008", "001", "J01", "DS004", "MK04", "B"),
("K009", "005", "J02", "DS005", "MK05", "A"),
("K010", "005", "J02", "DS006", "MK06", "A"),
("K011", "005", "J02", "DS007", "MK07", "A"),
("K012", "003", "J03", "DS009", "MK09", "A"),
("K013", "002", "J02", "DS007", "MK07", "D"),
("K014", "002", "J02", "DS008", "MK08", "B"),
("K015", "006", "J01", "DS003", "MK03", "C"),
("K016", "006", "J01", "DS004", "MK04", "B"),
("K017", "004", "J01", "DS003", "MK03", "B"),
("K018", "003", "J03", "DS011", "MK11", "A"),
("K019", "003", "J03", "DS012", "MK12", "D"),
("K020", "004", "J01", "DS004", "MK04", "E"),
("K021", "006", "J01", "DS001", "MK01", "E"),
("K022", "006", "J01", "DS002", "MK02", "B");

ALTER TABLE mahasiswa ADD Lahir DATE;


UPDATE mahasiswa SET Lahir="2004-01-23" WHERE nim="001";
UPDATE mahasiswa SET Lahir="1999-06-26" WHERE nim="002";
UPDATE mahasiswa SET Lahir="2003-10-05" WHERE nim="003";
UPDATE mahasiswa SET Lahir="2004-10-11" WHERE nim="004";
UPDATE mahasiswa SET Lahir="2003-11-02" WHERE nim="005";
UPDATE mahasiswa SET Lahir="2000-02-28" WHERE nim="006";


.headers on
.mode column

-- Tugas 1 (coba pake left join)
SELECT *,(SELECT namajurusan FROM jurusan WHERE jurusan.idjurusan=mahasiswa.idjurusan) AS nama_jurusan FROM mahasiswa;

-- Tugas 2 (coba pake str)
SELECT *,DATE("now")-DATE(Lahir) AS umur FROM mahasiswa WHERE umur<20;

-- Tugas 3 (coba pake or sama in)
SELECT DISTINCT nim,(SELECT nama FROM mahasiswa WHERE mahasiswa.nim=kontrak.nim) AS nama FROM kontrak WHERE nilai<="B";

-- Tugas 4
SELECT nim, (SELECT nama FROM mahasiswa WHERE mahasiswa.nim=kontrak.nim) AS nama, SUM((SELECT sks FROM matakuliah WHERE matakuliah.idmatakuliah=kontrak.idmatakuliah)) AS sks FROM kontrak GROUP BY nim HAVING sks<10;

-- Tugas 5 (coba pake like)
SELECT nim, (SELECT nama FROM mahasiswa WHERE mahasiswa.nim=kontrak.nim) AS nama FROM kontrak WHERE idmatakuliah="MK07";

-- Tugas 6
SELECT *, (SELECT COUNT(DISTINCT nim) FROM kontrak WHERE kontrak.nip=dosen.nip) AS jumlah_mahasiswa FROM dosen;

-- Tugas 7
SELECT *,DATE("now")-DATE(Lahir) AS umur FROM mahasiswa ORDER BY umur;

-- Tugas 8
SELECT * FROM kontrak JOIN mahasiswa on kontrak.nim=mahasiswa.nim JOIN jurusan on kontrak.idjurusan=jurusan.idjurusan JOIN dosen on kontrak.nip=dosen.nip WHERE nilai>="D";


