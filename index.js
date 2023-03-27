/**
 * Seseorang pengunjung bar direpresentasikan oleh JavaScript memiliki variable name, age, dan money.
 * Ia masuk ke bar untuk memesan minuman, namun bar memiliki kondisi sebagai berikut:
 *
 * - Jika name dari si pengunjung kosong, tampilkan di console "Anda tidak boleh masuk!" dan program selesai.
 *   Jika name tidak kosong, lanjut ke step ke 2.
 *
 * - Jika age dari si pengunjung dibawah 17 tahun, maka ia hanya boleh memesan juice.
 *   Jika age 17 tahun keatas, ia hanya boleh memesan anggur.
 *
 * - Juice memiliki harga 50000, sedangkan anggur memiliki harga 300000.
 *   Jika money/uang yang dimiliki tidak mencukupi, maka tampilkan di console "Uang tidak cukup. Anda harus pulang.".
 *   Jika uang cukup, tampilkan "Anda bisa pesan minum. Sisa uang anda: [...]",
 *   dan ganti [...] dengan sisa uang yang telah dikurangi oleh harga minuman.
 */



let nama = "adi";
let umur = 60;
let uang = 200000;


function meMesan(nama, umur, uang) {

    //jika nama kosong
    if (nama === "") {
      alert("Anda tidak boleh masuk!");
    } else if (umur < 17) {
      // jika umur kurang dari 17 tahun
      console.log("Anda hanya boleh memesan juice.");
      if (uang < 50000) {
        alert("Uang tidak cukup, Anda harus pulang.");
      } else {
        uang -= 50000;
        console.log("Anda bisa pesan minum, Sisa uang anda: " + uang);
      }
    } else {
      // jika umur 17 tahun ke atas
      console.log("Anda hanya boleh memesan anggur.");
      if (uang < 300000) {
        alert("Uang tidak cukup, Anda harus pulang.");
      } else {
        uang -= 300000; 
        console.log("Anda bisa pesan minum, Sisa uang anda: " + uang);
      }
    }
  }

    meMesan(nama, umur, uang)