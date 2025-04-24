# backend-team-UTS
Kelompok 1:
1. Natasya Agustine Sadhi – 535240001 
2. Patricia Natania – 535240009 
3. Lyvia Reva Ruganda – 535240028 
4. Vicky Erie Sukardi – 535249101 

file:
1. index.js → menghubungkan aplikasi dengan semua route, menginisialisasi server, serta mengatur middleware seperti body-parser, CORS, dan koneksi ke database MongoDB
2. route.js → menentukan endpoint dan mengarahkan ke controller.js sesuai jenis request (GET, POST, PUT, DELETE)
3. controller.js → menangani permintaan (request) dan jawaban (response), serta memanggil fungsi dari service.js untuk menjalankan proses logika
4. service.js → menjalankan logika pemrograman untuk akses database menggunakan schema.js, bisa juga menyaring, memproses, atau memvalidasi data sebelum dan sesudah ke database
5. repository.js → menjadi lapisan akses data langsung ke database; berfungsi sebagai perantara antara service.js dan schema.js, agar kode lebih modular dan mudah diuji
6. schema.js → mendefinisikan struktur data dan tipe-tipe field untuk setiap koleksi di MongoDB menggunakan Mongoose (misalnya: nama, level, ability_score, dll.)
7. mongoDB → tempat menyimpan data, menerima perintah dari schema.js (via mongoose) untuk create, read, update, dan delete (CRUD)  

daftar endpoint:
1. classes
2. races
3. spells
4. monsters
5. equipment
6. ability-scores
7. proficiencies
8. skills
9. features
10. alignments

fitur:
1. post(create)
2. getAll
3. getByIndex
4. getByName
5. put(update)
6. delete
