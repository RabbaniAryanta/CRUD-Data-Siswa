# CRUD Siswa Sederhana (Tanpa Database)
Proyek ini adalah implementasi CRUD (Create, Read, Update, Delete) data siswa menggunakan Express.js tanpa database. Data siswa disimpan dalam array di memori. API ini dapat diuji menggunakan Postman.

## 👤 Identitas
Nama: Muhammad Rabbani Aryanta
Kelas: XI RPL 1

## 🗂️ Struktur Data
Setiap siswa memiliki struktur data berikut:

{
  "nisn": string,
  "nama": string,
  "alamat": string,
  "umur": number
}


## ✨ Fitur Utama
| Method | Endpoint       | Deskripsi                         |
| ------ | -------------- | --------------------------------- |
| GET    | `/siswa`       | Ambil semua data siswa            |
| GET    | `/siswa/:nisn` | Ambil data siswa berdasarkan NISN |
| POST   | `/siswa`       | Tambah data siswa baru            |
| PUT    | `/siswa/:nisn` | Ubah data siswa berdasarkan NISN  |
| DELETE | `/siswa/:nisn` | Hapus data siswa berdasarkan NISN |

## 🖼️ Screenshot
![](img/image1.png)
![](img/img2.png)
![](img/img3.png)
![](img/img4.png)

